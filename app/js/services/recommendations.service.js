'use strict';

angular.module('homestylingapp')
.service("recommendationsService", ["$http", function($http){
	this.getRecs = function(callback){
		$http({
			method: "GET",
			url: "data/recs.json",
			cache: true,
		}).then(callback);
	};

	return this;
}]);