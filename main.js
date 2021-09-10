const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io').listen(server);

server.listen(3030);

app.get('/', (req, res) => {
    response.sendFile(__dirname, );
});


