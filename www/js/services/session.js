'use strict';

(function userSession($log,localStorage){
    
    console.log('local service user session' + localStorage);

//    this._authData = JSON.parse(localStorage.getItem('session.authData'));

    
 //   this._user = JSON.parse(localStorage.getItem('session.user'));

//     this.setUser = function(user){
// 	this._user = user;
// //	localStorage.setItem('session.user', JSON.stringify(user));
// 	return this;
//     }
//    ;


    userSession.$inject = ['$log', 'localStorage'];
    angular
	.module('myApp')
	.service('userSession', userSession);
    

})(angular);

