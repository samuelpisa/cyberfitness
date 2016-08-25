'use strict';

angular.module('myApp.treinar', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/treinar', {
    templateUrl: 'treinar/treinar.html',
    controller: 'TreinarCtrl'
  });
}])

.controller('TreinarCtrl', ['$scope', function($scope) {

	$scope.formTreinar = true;

	firebase.database().ref('treinos/').on('value', function(snapshot) {
		console.log(snapshot.val());
		$scope.treinos = snapshot.val();
	});

}]);