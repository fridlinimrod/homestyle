'use strict';

/**
 * @ngdoc function
 * @name noadvashApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the noadvashApp
 */

 angular.module('homestylingapp')
  .controller('myWorkCtrl', ['$scope',function ($scope) {
    $scope.active = "home";
    $scope.changeActive = function(event){
    	$scope.active = event;
    };
    //todo: watch the route param and on change - change the active variable.
    $("#bs-example-navbar-collapse-1 > ul > li a").click(function(event){
    	$scope.changeActive(event);
    });

    
  }]);