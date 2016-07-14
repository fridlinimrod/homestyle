'use strict';

/**
 * @ngdoc function
 * @name noadvashApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the noadvashApp
 */

 angular.module('homestylingapp')
  .controller('homeCtrl', ['$scope', function ($scope) {
    $scope.title = "דף הבית";
    $scope.pics = [
    	{
    		url: "pics/home/gameroom.jpg"
    	},
    	{
    		url: "pics/home/kitchen.jpg"
    	},
    	{
    		url: "pics/home/salon.jpg"
    	},
    	{
    		url: "pics/home/sleepingroom.jpg"
    	}
	];
  }]);