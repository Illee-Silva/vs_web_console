const express = require("express");
const {spawn} = require("child_process");
const cors = require("cors");
const { error } = require("console");

const app = express();
app.use(cors())
app.use(express.json())

let server_process = null;

// Configs
let config_serverpath = '/home/vintageserver/server'
let config_datapath = '/home/vintageserver/data'

// Logs Logic
let server_logs = [];
let log_clients = [];
const max_logs = 2000;

function broadcastLog(text){
    const lines = text.split('\n').filter(line => line.trim() !== '');

    lines.forEach(line => {
        server_logs.push(line);
        if (server_logs.length > max_logs){
            server_logs.shift();
        }

        log_clients.forEach(client => {
            client.res.write(`data: ${JSON.stringify({type: 'new', data:line})}\n\n`)
        });

    });

        
}

app.get('/api/logs', (req, res) => {
    // Cabeçalhos obrigatórios para manter a conexão aberta (SSE)
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    // Manda o histórico das 1000 linhas logo que o painel abre
    res.write(`data: ${JSON.stringify({ type: 'history', data: server_logs })}\n\n`);

    // Adiciona o cliente na lista de conexões ativas
    const client = { id: Date.now(), res };
    log_clients.push(client);

    // Quando o usuário fechar a aba do painel, tira ele da lista
    req.on('close', () => {
        log_clients = log_clients.filter(c => c.id !== client.id);
    });
});

app.post('/api/start', (req, res) => {

    if (server_process !== null){
        return res.status(400).json({error: 'Server is already Running!'})
    }

    try{
        
        console.log("Server Trying to Start...")

        server_process = spawn('dotnet', ['VintagestoryServer.dll', '--dataPath', config_datapath], {
            cwd: config_serverpath
        });

        if (server_process.stdout) {
            server_process.stdout.on('data', (data) => {

                console.log(`${data.toString()}`);
                broadcastLog(data.toString());

            });
        }

        server_process.on('close', (code)=> {
            console.log(`The server has closed. ${code}`)
            server_process = null;  
        })

        if (server_process.stderr) {
            server_process.stderr.on('data', (data) => {
                console.error(`${data.toString()}`);
                broadcastLog(data.toString());
            });
        }
        
        return res.json({ success: true, message: "Server starting..." });

    }

    catch (e) {
        console.error(e)
        return res.status(500).json({ error: e.message });
    }

})

app.post('/api/stop', (req, res) => {

    try{

        if (server_process === null){
            return res.status(400).json({error: 'server is already closed!'});
        }

        if(server_process.stdin){
            server_process.stdin.write('/stop\n');
        } else{
            return res.status(500);
        }

        return res.json({ success: true, message: "Comando /stop enviado. O servidor está salvando e desligando..." });
        
    }
    catch(e){
        console.error("Erro ao tentar enviar o comando", e);
        return res.status(500);
    }
})  

app.post('/api/execute', (req, res) => {

    
    if(server_process === null){
        return res.status(400).json({error: 'server is not online. cant execute command!'});
    }

    const {command} = req.body;

    if (!command){
        return res.status(400).json({error: "command is empty"});
    }


    try{

        console.log('sending command')

        if(server_process.stdin){
            server_process.stdin.write(`${command}\n`);
            return res.json({ success: true, message: `Comando "${command}" enviado com sucesso!` });
        }
        else{
            return res.status(500).json({ error: 'Terminal do servidor inacessível.' });
        }

    }
    catch (e) {
        console.error("Erro ao enviar comando:", e);
        return res.status(500).json({ error: 'Erro ao processar o comando.' });
    }

})



app.listen(3001, () => {
    console.log("API is UP and running at: 3001");
});