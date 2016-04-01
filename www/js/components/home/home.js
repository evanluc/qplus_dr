var myAppTasks = angular.module('myApp.home', []);

myAppTasks.controller('TasksCtrl',['requestToFirebase','$state','$scope','$http',function(requestToFirebase,$state,$scope,$http){

    requestToFirebase.request('tasks');
    
    $http.get('/tasks/')
	.success(function(data){
	    console.log('success getting the data');
	    $scope.tasks = data;
	})
	.error(function(data){
	    console.log('error getting the data');
	});
}]);
