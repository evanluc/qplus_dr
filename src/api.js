/*jslint node: true*/
'use strict';

var firebase = require('./firebase.js');

var exports = module.exports = {};

var sqlConnection = require('./sql_connection.js');
var Promise = require('bluebird');

firebase.sendFirebaseRequest('hi');

exports.getTasks = function(){
    var tasks = sqlConnection.getTasks();
    firebase.sendFirebaseRequest(tasks);
};

exports.getPatients = function(){
    var patients = sqlConnection.getPatients();
    console.log('getting patient');
    firebase.sendFirebaseRequest(patients);
    console.log('done firebase request' + patients);
};


