'use strict';

/**
 * @ngdoc function
 * @name noadvashApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the noadvashApp
 */

/*jshint multistr: true */
 angular.module('homestylingapp')
    .controller('recommendationsController', ['$scope', 'recommendationsService', 'commonService', function ($scope, recommendationsService, commonService) {
        $scope.isMobile = commonService.isMobile();

        if ($scope.isMobile){
            $scope.options = {  
                                picsToShow: 3,
                                shouldShowBigPic: true
                            };
        }
        else {
            $scope.options = {
                                picsToShow: 5,
                                shouldShowBigPic: true
            };
        }

		var setScopeRecs = function(data){
			$scope.recs = data.data;
		};
  		//TODO: create a recommendations service and fetch recs from it
  		recommendationsService.getRecs(setScopeRecs);
  		//create a directive for video (play and pause on click)
	}

]);