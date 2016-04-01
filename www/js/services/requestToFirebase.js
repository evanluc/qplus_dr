'use strict';

var myApp = angular.module('myApp');

myApp.service('requestToFirebase',function($http){


  console.log('thie ui');
  
  console.log('request to firebase');
    var myFirebaseRef = new Firebase('https://opaldoctor.firebaseio.com/');
  this.request = function(request){
	myFirebaseRef.push({ 'Request' : request });
    };

});
