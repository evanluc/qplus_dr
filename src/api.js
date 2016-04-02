/*jslint node: true*/
'use strict';

var firebase = require('./firebase.js');
var bluebird = require('bluebird');

var exports = module.exports = {};

var sqlConnection = require('./sql_connection.js');
var Promise = require('bluebird');

exports.getTasks = function(){

    var sqlTasksResults = sqlConnection.getTasks().then(function(data){
	return firebase.sendFirebaseRequest(data);
    });

};
exports.getPatients = function(){
    var sqlPatientsResults = sqlConnection.getPatients().then(function(data){
	firebase.sendFirebaseRequest(data);
    });

};


