//src = http://www.jvandemo.com/learn-how-to-make-authentication-in-your-angular-applications-simpler-and-more-consistent/

(function (angular) {

    function localStorageServiceFactory($window){
	if($window.localStorage){
	    return $window.localStorage;
	}
	throw new Error('Local storage support is needed');
    }

    // Inject dependencies
    localStorageServiceFactory.$inject = ['$window'];

    // Export
    angular
	.module('myApp')
	.factory('localStorage', localStorageServiceFactory);

})(angular);

