var socket = io.connect("http://localhost:8000");
var message = document.getElementById("message");
var handle = document.getElementById("handle");
var btn = document.getElementById("send");
var output = document.getElementById("output");
var feedback = document.getElementById("feedback");
console.log(message);
btn.addEventListener("click",function()
{
    // console.log(message.value);
    socket.emit("chat" , {message: message.value,handle:handle.value});
});
message.addEventListener("keypress",function(){
    socket.emit("type", handle.value);
});
socket.on("chat",function(data){
    feedback.innerHTML =  "";
    output.innerHTML += `<p><strong>  ${data.handle}: </strong>  ${data.message} </p>`;
});
socket.on("type",function(data)
{
    feedback.innerHTML = `<p><em> ${data} is typing ...</em></p>`;
})


