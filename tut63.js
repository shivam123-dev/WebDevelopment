// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.end("Hello World! This is shivam");
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pseudo selectors & more designing</title>
    <style>
        .container{
            border: 2px solid red;
            background-color: greenyellow;
            padding: 34px;
            margin: 34px auto;
            width: 666px;
        }
        a{
            text-decoration: none;
            color: chocolate;
        }
        a:hover{
            color: black;
            background-color: cornsilk;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            font-weight: bolder;
        }
        a:visited{
            background-color: yellow;
        }
        a:active{
            background-color: blue;

        }
        .btn{
            background-color: crimson;
            padding: 6px;
            border: none;
            cursor: pointer;
            font-size: 13px;
            border-radius: 4px;
        }
        .btn:hover{
            color: violet;
            background-color: turquoise;
            border: 2px solid black;
        }
    </style>
</head>
<body>
    <div class="container" id="cont1">
        <h3>This is my heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab hic harum ad delectus blanditiis incidunt voluptas sit aspernatur alias illum, quo culpa ex cupiditate ipsa facilis omnis aperiam. Sit delectus quisquam quod aliquid. Vel?</p>
        <a href="https:/google.com/" class="btn">Read More</a>
        <button class="btn">Contact Us</button>
    </div>
</body>
</html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});