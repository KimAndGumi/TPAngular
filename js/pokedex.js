var pokeApp = angular.module('pokedex', ['ngResource']);
pokeApp.controller('search', function($scope,$log,$http){
	//console.log($scope.numeropokemon)
	$scope.ficheOK = false;
	$scope.getListePokemon = function(){
		$http({
			method: 'GET',
			url : 'http://pokeapi.co/api/v2/pokedex/1'
		}).then(function successCallback(response) {
			$scope.listePokemon = response.data.pokemon_entries;
		}, function errorCallback(response) {
			$log.log("probleme");
		});
	};
	$scope.send = function(){
		$http({
			method: 'GET',
			url : 'http://pokeapi.co/api/v2/pokemon/' + $scope.numeropokemon + '/?format=json'
		}).then(function successCallback(response) {
			//$log.log(response.data);
			$scope.ficheOK = true;
			$scope.res = response.data;
		}, function errorCallback(response) {
			$log.log("probleme");
		});
	};
	
})

/*pokeApp.controller('print', function($scope,$log,serviceInfo){
	$scope.num = $scope.res.
}*/
/*pokeApp.factory('serviceId', function($scope) {
	var listePokemonInstance;
	$resource("http://pokeapi.co/api/v2/pokedex/1")
	
	return listePokemonInstance
}*/
pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

var pokeApiUrl = "http://pokeapi.co/"
