const express = require("express");
const {spawn} = require("child_process");
const cors = require("cors")

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

        server_process = spawn('dotnet', ['VintagestoryServer.dll', '--dataPath', config_datapath], {
            cwd: config_serverpath
        });

    }
    catch (e) {
        console.error(e)
        return res.status(500)
    }

})

app.listen(3001, () => {
    console.log("API rodando na porta 3001");
});