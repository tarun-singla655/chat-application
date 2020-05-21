var express = require("express")
var socket = require("socket.io")
var app = express();
var server = app.listen(8000,function(){
  console.log("server is listening ")
})

app.use(express.static("public"));
var io = socket(server);
io.on('connection',function(socket){
  
  socket.on("chat",function(data){
         // console.log(data);
          io.sockets.emit("chat",data);
       
  });
  socket.on("type",function(data)
  {
    socket.broadcast.emit("type",data);
  })
});
