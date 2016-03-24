'use strict';

var myApp = angular.module('myApp', [
    'ui.router',
//    'myApp.home'
]);


myApp.config(function($urlRouterProvider,$stateProvider) {
    // Routes will be here
//    $urlRouterProvider.otherwise('/home');

    $stateProvider
	.state('home', {
            url: '/',
	    template: 'home',
//            templateUrl: 'components/home/home.html',
//	    controller: 'HomeCtrl'
	});
    	    console.log('in route provider');
});



