'use strict';

var myAppLogin = angular.module('myApp.login', [
    'ui.router',
    'firebase'
]);

myAppLogin.controller('LoginCtrl', ['$scope','userAuth',function($scope,userAuth) {

    $scope.user = {};
    
    $scope.SignIn = function(e){
   	e.preventDefault();
	
	var username = $scope.user.email;
	var password = $scope.user.password;

	userAuth.login(username,password);
	
    };
}]);
