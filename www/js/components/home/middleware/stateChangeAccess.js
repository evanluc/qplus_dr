(function (angular) {

    function checkAccessOnStateChange($rootScope, $state, userAuth){

	$rootScope.$on('$locationChangeStart', function(event, newUrl, oldUrl){

	    if(!userAuth.isLoggedIn()){

		event.preventDefault();
		$state.go('home');
	    }
	});

	// Listen for state changes when using ui-router
	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){

	    if(!userAuth.isLoggedIn && toState.name !== 'home'){

		event.preventDefault();
		$state.go('home');
	    }
	});
    }
    


    // home dependencies
    checkAccessOnStateChange.$inject = ['$rootScope','$state','userAuth'];

    // Export
    angular
	.module('myApp')
	.run(checkAccessOnStateChange);

})(angular);
