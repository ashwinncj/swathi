var express = require('express')
var transaction = require('./transaction')
var app = express()

const port = 3000

app.listen(port, function(event) {
    console.log('Starting the app at http://localhost:' + port);
})

app.get('/', function(req, res) {
    res.send('You have reached the landing page. Please use only API calls to access the backend')
})

app.get('/transaction/add', function(req, res) {
    let val = transaction.add()
    res.send(val)
})