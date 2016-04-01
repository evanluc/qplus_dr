'use strict';
const Firebase = require('firebase');
const bluebird = require('bluebird');
const events = require('events');
const api = require('./api.js');

var myFirebaseRef = new Firebase('https://opaldoctor.firebaseio.com/');

var requestEmitter = new events.EventEmitter();

const requestEvents = {
    "tasks": "tasks",
    "patients": "patients"
};


var requestListener = function requestListener(requestsFromFirebase){
    if(requestEvents.hasOwnProperty(requestsFromFirebase.key())){
	requestEmitter.emit(requestsFromFirebase.key());
    }
};

myFirebaseRef.child('requests').on('child_added',function(requestsFromFirebase){
    requestListener(requestsFromFirebase);    
});

requestEmitter.on('tasks', function(){
    var tasksPromise = bluebird.defer();
    
    api.getTasks().then(function(objectofireabase){
	console.log('got tasks');
	tasksPromise.resolve(tasksPromise);
    });

    return tasksPromise.promise;
});

requestEmitter.on('patients', function(){
    api.getPatients();
});


