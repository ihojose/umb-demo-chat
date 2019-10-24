let socket = io.connect('http://localhost:8085');

socket.on('news', data => {
    console.log(data);
});