var express = require('express')
var app = express();
server = require('http').createServer(app),
io = require('socket.io').listen(server);

server.listen(process.env.PORT || 5000);

app.get('/',function (req , res) {

    res.sendFile(__dirname +'/index.html');


});


