// Starting lines which must be written when using
// expressJs
const express = require('express');
const path = require('path')
const app = express();
const port = 80;

// for serving the static files
app.use('/static', express.static('static'))

// set the template engine as pug
app.set('view engine', 'pug')

// set the view directory
app.set('views',path.join(__dirname,'views'))

// Our pug demo endpoint
app.get('/demo', function (req, res) {
    res.status(200).render('demo', { title: 'Hey Shivam', message: 'Hello there!' })
});

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