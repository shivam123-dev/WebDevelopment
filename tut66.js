// Serving HTML files using NodeJs

// importing built-in modules
const http = require('http');
const fs = require('fs');

// reading files
const fileContent = fs.readFileSync('tut61.html');

// creating server
const server = http.createServer((req,res) =>{
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(fileContent);
});

// listening server
server.listen(8000, '127.0.0.1', ()=>{
    console.log("Listening on port");
})