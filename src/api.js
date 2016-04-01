/*jslint node: true*/
'use strict';

var firebase = require('./firebase.js');
var bluebird = require('bluebird');

var exports = module.exports = {};

var sqlConnection = require('./sql_connection.js');
var Promise = require('bluebird');

exports.getTasks = function(){

    var dataPromise = bluebird.defer();
    
    sqlConnection.getTasks().then(function(rows){
	console.log('returning from fnction');
	dataPromise.resolve(rows);
    });

    return dataPromise.promise;

    // firebase.sendFirebaseRequest(tasks);

};
    exports.getPatients = function(){
	var patients = sqlConnection.getPatients();
	console.log(patients);
	firebase.sendFirebaseRequest(patients);
    };


