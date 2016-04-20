'use strict';

var myApp = angular.module('myApp', [
    'ui.router',
    'myApp.login',
    'myApp.home',
    'onsen'
]);

//username: evanmcilroy@gmail.com
//password: password
function assignServicesToRootScope($rootScope, userAuth, userSession){
    $rootScope.userAuth = userAuth;
    $rootScope.userSession = userSession;
}


myApp.run(assignServicesToRootScope);

myApp.config(function($urlRouterProvider,$stateProvider) {

    $urlRouterProvider.otherwise(function($injector, $location) {
	var $state = $injector.get('$state');
	console.log('routingoutherwirse');
	$state.go('login');
    });

    $stateProvider
	.state('login', {
            url: '/',
	    templateUrl: 'js/components/login/login.html',
	    controller: 'LoginCtrl'
	})

	.state('splashScreen', {
            url: '/list',
            templateUrl: 'js/components/splashscreen/splashscreen.html'
            //template: 'welcome to splash magic'
	})

        .state('menu',{
	    url: '/menu',
	    templateUrl: 'js/components/menu/menu.html'
	})
    
	.state('tasks',{
	    url: '/tasks',
	    templateUrl: 'js/components/home/home.html',
	    controller: 'TasksCtrl'
	})

	.state('patients',{
		url: '/patients',
		templateUrl: 'js/components/patients/patient.html',
		controller: 'PatientCtrl'
	});
});




