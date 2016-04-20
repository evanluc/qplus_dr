'use strict';

var myApp = angular.module('myApp');

myApp.service('requestToFirebase',function($http, $rootScope){

    var myFirebaseRef = new Firebase('https://opaldoctor.firebaseio.com/');

    this.request = function(request){

	var user = $rootScope.userSession.getUser();
	
	console.log("in session service" + $rootScope.userSession.getUser);
	
	
	myFirebaseRef.push({ 'Request' : request, 'User' : user});
	console.log('done pushing request to firebase');
    };

    this.requestResponse = function(request){
	
    };

});
