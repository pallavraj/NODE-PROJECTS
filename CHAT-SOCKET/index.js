var express = require('express')
var app = express();
server = require('http').createServer(app),
io = require('socket.io').listen(server);
app.use(express.static(__dirname + '/public'));
usernames = [];

server.listen(process.env.PORT || 5000);
console.log("Server running")

app.get('/',function (req , res) {

    res.sendFile(__dirname + '/public');


});


io.sockets.on('connection', function (socket) {
    socket.on('new user',function (data , cb) {
     if(usernames.indexOf(data)!=-1){
         cb(false);
     }
     else{
         cb(true);
         socket.username = data;
         usernames.push(socket.username);
         updateUsernames();
     }
        
    });


    function updateUsernames(){
        io.sockets.emit('usernames',usernames);
    }

    socket.on('send message',function (data) {
        io.sockets.emit('new message',{msg: data, user:socket.username});
    });


    socket.on('disconnect', function (data) {
        if(!socket.username){
            return;
        }
        usernames.splice(usernames.indexOf(socket.username),1);
        updateUsernames();
    })

})