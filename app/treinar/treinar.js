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
	$scope.treinoSelect = '';

	firebase.database().ref('treinos/').on('value', function(snapshot) {
		$scope.treinos = snapshot.val();
	});


	$scope.iniciarTreino = function(treino) {

		$scope.formTreinar = false;
    	$scope.treinoSelect = treino;
    };

}]);