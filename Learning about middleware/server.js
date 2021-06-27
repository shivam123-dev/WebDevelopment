const express = require('express')
const app = express()

app.use(login)

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/users', auth, (req, res) => {
    console.log(req.admin);
    res.send('Users Page')
})

// Middleware for all
function login(req, res, next) {
    console.log('Inside middleware');
    next()
}

// Middleware for a specific endpoint
function auth(req, res, next) {
    console.log('Inside auth');
    if(req.query.admin === 'true'){
        req.admin = true;
        next()
        return
    }
    else{
        res.send('No Auth');
    }
}

app.listen(80)