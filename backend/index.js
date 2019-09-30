var express = require('express')
var transaction = require('./transaction')
var app = express()
const uuidv1 = require('uuid/v1')
var bodyParser = require('body-parser')
const port = 3000
app.use(bodyParser.json())

app.listen(port, function(event) {
    console.log('Starting the app at http://localhost:' + port);
})

app.get('/', function(req, res) {
    res.send('You have reached the landing page. Please use only API calls to access the backend')
})

app.post('/transaction/site', function(req, res) {
    let params = req.body;
    let response = transaction.site(params)
    res.send(response)
})