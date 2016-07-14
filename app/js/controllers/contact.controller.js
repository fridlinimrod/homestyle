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
  .controller('contactController', ['$scope', '$http', function ($scope, $http) {
    $scope.name = "name";
    $scope.mail = "";
    $scope.phone = "555555";
    $scope.message = "";
    $http = "hi";
    $scope.submitContact = function () {
  		// $http.post()
  		console.log($scope.name, " ", $scope.phone);
	};

	angular.element(document).ready(function () {
		
	});

  }]);