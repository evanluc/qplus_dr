'use strict';

var myAppHome = angular.module('myApp.home', [
    'ui.router',
    'firebase'
]);

myAppHome.controller('HomeCtrl', ['$scope','userAuth',function($scope,userAuth) {

    $scope.user = {};
    
    $scope.SignIn = function(e){
   	e.preventDefault();
	
	var username = $scope.user.email;
	var password = $scope.user.password;

	userAuth.login(username,password);
	
    };
}]);
