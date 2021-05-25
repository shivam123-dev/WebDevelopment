// Starting lines which must be written when using
// expressJs
const express = require('express');
const app = express();
const port = 80;
app.get('/', (req, res) => {
    res.send('This is my first express app');
});

app.listen(port, () => {
    console.log(`${port}`);
})