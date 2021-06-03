const express = require('express');
const path = require('path');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const port = 80;

mongoose.connect('mongodb://localhost/contactDance', { useNewUrlParser: true, useUnifiedTopology: true });

// Define mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String,
});
const Contact = mongoose.model('Contact', contactSchema);

// EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'));
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))

// ENDPOINTS
app.get('/',(req,res)=>{
    const params = {};
    res.status(200).render('home.pug',params);
});
app.get('/contact',(req,res)=>{
    const params = {};
    res.status(200).render('contact.pug',params);
});
app.get('/about',(req,res)=>{
    const params = {};
    res.status(200).render('about.pug',params);
});
app.get('/services',(req,res)=>{
    const params = {};
    res.status(200).render('services.pug',params);
});
app.get('/class',(req,res)=>{
    const params = {};
    res.status(200).render('classinfo.pug',params);
});
app.post('/contact',(req,res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("This item has been saved to database");
    }).catch(()=>{
        res.status(400).send("Item was not saved to the database");
    });
});

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application is running on port ${port}`)
})