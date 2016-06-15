'use strict';

/**
 * @ngdoc function
 * @name noadvashApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the noadvashApp
 */
 angular.module('homestylingapp')
 //.controller('DetailController', ['$scope', '$location',  function($scope, $location)
  .controller('headerController', ['$scope', '$location', function ($scope, $location) {
    $scope.active = "home";
    $scope.isActive = function (path) {
  		return ($location.path().substr(0, path.length) === path);
	};

	angular.element(document).ready(function () {
		$("nav li").on("click","a", function(){
			$("nav button").trigger("click");
		});
	});

  }]);