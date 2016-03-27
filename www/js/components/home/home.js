'use strict';

var myAppHome = angular.module('myApp.home', [
  'ui.router',
  'firebase'
]);

myAppHome.controller('HomeCtrl', ['$scope','userAuth',function($scope,userAuth) {
  // 	var firebaseObj = new Firebase("https://opaldoctor.firebaseio.com/");
  // 	var loginObj = $firebaseAuth(firebaseObj);

  // console.log('in console log');

  //    console.log(userAuth);

  $scope.user = {};
  

  // 	console.log($scope);
  
  // 	$scope.SignIn = function(e){
  // 	    e.preventDefault();
  
  var username = $scope.user.email;
  var password = $scope.user.password;


  //    console.log(userAuth);
  
  //    userAuth.login(username,password);

  //     loginObj.$authWithPassword({
  // 	email: username,
  // 	password: password
  //     })
  // 	.then(function(user) {
  // 	    // Success callback
  // 	  console.log('Authentication successful');
  // 	    console.log(user);
  
  // 	}, function(e) {
  // 	    // Failure callback
  // 	    console.log('Authentication failure');
  // 	    console.log(e);
  // 	});
  
  // };
}]);
