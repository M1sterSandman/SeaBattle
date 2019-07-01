const express = require("express");
const app = express();

const server = require("http").createServer(app);

const io = require("socket.io").listen(server);

let users = [];
let connections = [];


server.listen(process.env.PORT || 3000);
console.log("server running");

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/");
});

io.sockets.on("connection", socket => {
    connections.push(socket);
    console.log("connected: %s sockets connected", connections.length);

    //Disconnect
    socket.on('disconnect', (data) => {
        connections.splice(connections.indexOf(socket), 1);
        console.log('disconnected: %s socket connected', connections.length);
    });
    //Send ships
    socket.on('send ships', (ship1, ship2)=>{
        io.sockets.emit('new ships', {ship1: ship1}, {ship2: ship2});
    })

});
