'use strict';

var myApp = angular.module('myApp');

myApp.service('userAuth',['$firebaseAuth', function($firebaseAuth){


    console.log($firebaseAuth);

    console.log('in the my app service');
    var firebaseObj = new Firebase("https://opaldoctor.firebaseio.com/");
    var loginObj = $firebaseAuth(firebaseObj);


    this.isLoggedIn = function(){
	console.log(loginObj);
	console.log('returning login obj');
	return loginObj.$getAuth();
    };

    this.login = function(username,password){
	return loginObj
	    .$authWithPassword({
		email: username,
		password: password
	    })
	    .then(function(user){
		console.log('Successful auth in service');
		
	    }, function(e){
		$q.reject(error);
	    });
    };

    this.logOut = function(){
	loginObj.destroy();
    };

}]);




