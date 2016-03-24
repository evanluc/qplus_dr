'use strict';

//angular.module('myApp.home', ['ngRoute','firebase'])

// Declared route 
  /* .config(['$routeProvider', function($routeProvider) {
     $routeProvider.when('/home', {
     templateUrl: 'js/components/home/home.html',
     controller: 'HomeCtrl'
     });
     }]) */
// Home controller
    .controller('HomeCtrl', ['$scope','$firebaseAuth',function($scope,$firebaseAuth) {
	var firebaseObj = new Firebase("https://opaldoctor.firebaseio.com/");
	var loginObj = $firebaseAuth(firebaseObj);


	$scope.user = {};
	
	$scope.SignIn = function(e){
	    e.preventDefault();
	    
	    var username = $scope.user.email;
	    var password = $scope.user.password;

	    loginObj.$authWithPassword({
		email: username,
		password: password
            })
		.then(function(user) {
		    // Success callback
		  console.log('Authentication successful');
		  console.log(user);
		}, function(e) {
		    // Failure callback
		    console.log('Authentication failure');
		    console.log(e);
		});
	    
	};
    }]);
