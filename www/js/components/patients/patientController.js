var myAppTasks = angular.module('myApp.home', []);

myAppTasks.controller('PatientCtrl',['requestToFirebase','$state','$scope','$http',function(requestToFirebase,$state,$scope,$http){
    $scope.patientdb = {

    	patients:[
    		{name:'Test1',HospitalID:1,RAMQNUM:15},
    		{name:'Test2',HospitalID:2,RAMQNUM:25},
    		{name:'Test3',HospitalID:3,RAMQNUM:35},
    		{name:'Test4',HospitalID:4,RAMQNUM:45},
    		{name:'Test5',HospitalID:5,RAMQNUM:55},
    		{name:'Test6',HospitalID:6,RAMQNUM:65},
    		{name:'Test7',HospitalID:7,RAMQNUM:75},
    		{name:'Test8',HospitalID:8,RAMQNUM:85},
    		{name:'Test9',HospitalID:9,RAMQNUM:95},
    		{name:'Test10',HospitalID:10,RAMQNUM:150}
    	],

        recents:[],

    	fullName: function() {
    		var patientObject;
    		patientObject = $scope.patient;
    		return patientObject.firstName + " " + patientObject.lastName;
    	}
    };

    $scope.addRecent = function(patient){
        $scope.patientdb.recents.unshift(patient);
    };
}]);
