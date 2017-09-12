'use strict';

angular.module('homestylingapp')
.service("housesService", ["$http", function($http){
	this.getHouses = function(callback){
		$http({
			method: "GET",
			url: "data/houses.json",
			cache: true,
		}).then(callback);
	};
	this.getBeforeAndAfterData = function(callback){
		$http({
			method: "GET",
			url: "data/beforeAndAfter.json",
			cache: true,
		}).then(callback);
	};

	return this;
}]);