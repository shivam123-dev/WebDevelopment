// Starting lines which must be written when using
// expressJs
const express = require('express');
const app = express();
const port = 80;
// app.get('/', (req, res) => {
//     res.send('This is home page of my first express app');
// });

// for sending the status code
app.get('/', (req, res) => {
    res.status(200).send('This is home page of my first express app');
});

app.get('/about', (req, res) => {
    res.send('This is about page of my first express app');
});
app.post('/about', (req, res) => {
    res.send('This is post');
});
app.get('/this', (req, res) => {
    res.status(404).send('Cannot get this');
});
// Most important
app.listen(port, () => {
    console.log(`${port}`);
})