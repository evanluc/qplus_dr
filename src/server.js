/*jslint node: true*/ 
'use strict';

var express = require("express");
var bodyParser = require("body-parser");
var morgan = require('morgan');

var api = require('./api.js');

var app = express();

/* Express Configuration */
app.use("../www", express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if ('development' == app.get('env')){
  /* app.use(express.errorHandler()); */
}

var port = process.env.PORT || 8080;

//res.setHeader({ 'Content-Type': 'application/json' });

app.get('/', function(req, res) {
    res.send('Hello! Evan is setting up the API at http://localhost:' + port + '/api');
});

app.get('/tasks/', function(req,res){
  res.send('hi');
});

app.get('/patients/', function(req,res){
    api.getPatients();
    res.send('done');
});

app.listen(port);
console.log('Magic happens at http://localhost:' + port);

