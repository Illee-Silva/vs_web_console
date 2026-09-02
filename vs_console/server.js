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
            cwd: config_serverpath,
            stdio: 'inherit'
        });

        server_process.stdout.on('data', (data) => {
            if (data == null){
                data = "null"
            }
            console.log(`Received Chunck ${data}`);
        })

        return res.json({ success: true, message: "Server starting..." });

    }
    catch (e) {
        console.error(e)
        return res.status(503).json({error: "caralho, teste dessa poha"})
        // return res.status(500).json({ error: e.message });
    }

})

app.post('/api/stop', (req, res) => {

    if (server_process == null){
        return res.status(400).json({error: 'server is already closed!'})
    }

    server_process

})


app.listen(3001, () => {
    console.log("API rodando na porta 3001");
});