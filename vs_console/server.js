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

            });
        }

        server_process.on('close', (code)=> {
            console.log('The server has closed. ${code}')
            server_process = null;  
        })

        if (server_process.stderr) {
            server_process.stderr.on('data', (data) => {
                console.error(`${data.toString()}`);
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
            return res.status(400).json({error: 'server is already closed!'})
        }

        if(server_process.stdin){
            server_process.stdin.write('/stop\n')
        } else{
            return res.status(500)
        }

        return res.json({ success: true, message: "Comando /stop enviado. O servidor está salvando e desligando..." });
        
    }
    catch(e){
        console.error("Erro ao tentar enviar o comando", e)
        return res.status(500);
    }
})  


app.listen(3001, () => {
    console.log("API is UP and running at: 3001");
});