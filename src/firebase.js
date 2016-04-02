/*jslint node: true */
'use strict';

var exports = module.exports = {};

var Firebase = require('firebase');

var myFirebaseRef = new Firebase('https://opaldoctor.firebaseio.com/');
var requestsRef = new Firebase('https://opaldoctor.firebaseio.com/Requests');
var authData = myFirebaseRef.getAuth();


exports.sendFirebaseRequest = function(firebaseObject){
  myFirebaseRef.push(firebaseObject);
};


