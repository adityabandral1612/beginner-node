const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
    res.end("server is responding");
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening request");
});

//open localhost:8000 in browser for server response