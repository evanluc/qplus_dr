'use strict';

var myApp = angular.module('myApp', [
  'ui.router',
  'myApp.home'
]);

// function assignServicesToRootScope($rootScope, userAuth){
/*   $rootScope.userAuth = auth;
   $rootScope.session = session;
   console.log(userAuth);
   }*/

//myApp.run(assignServicesToRootScope);

myApp.config(function($urlRouterProvider,$stateProvider) {
  // Routes will be here
  

  $urlRouterProvider.otherwise('/');

  $stateProvider
	.state('home', {
          url: '/',
	  templateUrl: 'js/components/home/home.html',
	  controller: 'HomeCtrl'
	});
  console.log('in route provider');
});




