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
    		url: "pics/home/1.jpg"
    	},
    	{
    		url: "pics/home/2.jpg"
    	},
    	{
    		url: "pics/home/3.jpg"
    	},
    	{
    		url: "pics/home/4.jpg"
    	},
        {
            url: "pics/home/5.jpg"
        },
        {
            url: "pics/home/6.jpg"
        },
		{
            url: "pics/home/7.jpg"
		}
	];
  }]);