'use strict';

var myApp = angular.module('myApp', [
    'ui.router',
    'myApp.home'
]);

function assignServicesToRootScope($rootScope, userAuth, userSession){
    $rootScope.userAuth = userAuth;
    $rootScope.userSession = userSession;
}


myApp.run(assignServicesToRootScope);

myApp.config(function($urlRouterProvider,$stateProvider) {

    $urlRouterProvider.otherwise(function($injector, $location) {
        var $state = $injector.get('$state');
	console.log('routingoutherwirse');
        $state.go('home');
    });

    $stateProvider
	.state('home', {
            url: '/',
	    templateUrl: 'js/components/home/home.html',
	    controller: 'HomeCtrl'
	})

	.state('splashScreen', {
            url: '/list',
            template: 'welcome to splash magic'
	})

        .state('menu',{
	    url: '/menu',
	    templateUrl: 'js/components/menu/menu.html'
	});

    
    console.log('in route provider');
});




