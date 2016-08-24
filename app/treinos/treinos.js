'use strict';

angular.module('myApp.treinos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/treinos', {
    templateUrl: 'treinos/treinos.html',
    controller: 'TreinosCtrl'
  });
}])

.controller('TreinosCtrl', ['$scope', function($scope) {

	$scope.formTreino = true;

	$scope.treino = {
		aparelhos: []
	};

	//firebase.database().ref('treinos/').on('value', function(snapshot) {
	//	$scope.treinos = snapshot.val();
	//});

    $scope.addTreino = function(){

    	for (var i = 0; i < $scope.treino.aparelhos.length; i++) {
    		delete $scope.treino.aparelhos[i]['$$hashKey'];
    	}
    	console.log($scope.treino.aparelhos);
    	

    	var newKey = firebase.database().ref().child('treinos').push().key;

    	firebase.database().ref('treinos/' + newKey).set($scope.treino);

    	//firebase.database().ref().child(newKey).set($scope.treino.aparelhos);

    	$scope.treino = {
			aparelhos: []
		};

    };

    $scope.removeAparelho = function(aparelho) {

    	$scope.treino.aparelhos = $scope.treino.aparelhos.filter(function(ap) {
		    return ap.nome !== aparelho.nome;
		});
    };

    $scope.formAparelho = function(){
    	$scope.formTreino = false;
    };

    $scope.addAparelho = function(){
    	var aparelho = {
    		nome: $scope.aparelho,
    		serie: $scope.serie,
    		repeticao: $scope.repeticao,
    		carga: $scope.carga
    	};


    	$scope.treino.aparelhos.push(aparelho);



    	$scope.aparelho = '',
    	$scope.serie = '',
    	$scope.repeticao = '',
    	$scope.carga = '';

    	$scope.formTreino = true;
    };

	
}]);