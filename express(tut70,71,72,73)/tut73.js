const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));// for serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    const con = "Lorem ipsum"
    const params = {'title':'Pubg is the best game', 'content' : con}
    res.status(200).render('index.pug',params);
})
app.post('/',(req,res)=>{
    // console.log(req.body)
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let ouptutToWrite = `Name of client is ${name}, ${age} years old, ${gender}, ${address}, ${more}`
    fs.writeFileSync('output.txt', ouptutToWrite)

    const params = {'message':"Your form has been submitted"};
    res.status(200).render('index.pug',params);
})

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started at ${port}`)
});