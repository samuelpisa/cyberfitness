'use strict';

angular.module('myApp.treinos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/treinos', {
    templateUrl: 'treinos/treinos.html',
    controller: 'TreinosCtrl'
  });
}])

.controller('TreinosCtrl', ['$scope', function($scope) {

	firebase.database().ref('treinos/').on('value', function(snapshot) {
		$scope.treinos = snapshot.val();
	});

    $scope.addTreino = function(){
    	firebase.database().ref('treinos/' + $scope.nome).set({
    		nome: $scope.nome
    	});

    	$scope.nome = '';

    };

	
}]);