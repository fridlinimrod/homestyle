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
    .controller('beforeAfterCtrl', ['$scope', 'housesService', 'commonService', function ($scope, housesService, commonService) {
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

  		var setScopePics = function(data){
  			$scope.pics = data;
			$scope.activePicIndex = $scope.pics.length -2;
			$scope.activePic = $scope.pics[$scope.activePicIndex];
  		};

  		housesService.getBeforeAndAfterData(setScopePics);
		$scope.setActivePic = function(index){
			$scope.activePic = $scope.pics[index];
			$scope.activePicIndex = index;
		};

		$scope.prevPic = function(){
			$scope.activePicIndex = $scope.activePicIndex -1;
			if ($scope.activePicIndex === -1){
				$scope.activePicIndex = $scope.pics.length -1;
			}
			$scope.activePic = $scope.pics[($scope.activePicIndex)];
		};

		$scope.nextPic = function(){
			$scope.activePicIndex = $scope.activePicIndex +1;
			if ($scope.activePicIndex === $scope.pics.length){
				$scope.activePicIndex = 0;
			}
			$scope.activePic = $scope.pics[($scope.activePicIndex)];
		};

		$scope.isActive = function(index){
			return $scope.activePic === $scope.pics[index];
		};

		$scope.title = "לפני ואחרי";
       
	}

]);