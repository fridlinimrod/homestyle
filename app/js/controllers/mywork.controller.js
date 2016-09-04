'use strict';

/**
 * @ngdoc function
 * @name noadvashApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the noadvashApp
 */


 angular.module('homestylingapp')
  .controller('myWorkCtrl', ['$scope', "housesService", "commonService", "$timeout", function ($scope, housesService, commonService, $timeout) {
        housesService.getHouses(function(data){
            $scope.houses = data;
            //see how to extend each house with some functions and properties...
            angular.forEach($scope.houses, function(value){
                // value.activePic = value.pics[0];
                angular.extend(value, {activePic: value.pics[0],
                                       setActivePic: function(index){
                                            this.activePic=value.pics[index];
                                        },
                                        isTextVisible: false,
                                        shouldShowLargeImg: true,
                                        isActive: function(index){
                                            return this.activePic === value.pics[index];
                                        }                                
                });
            });

            $scope.activeHouse = $scope.houses[0];
        });

        $scope.toggleTextVisibility = function(house){
            house.isTextVisible = ! house.isTextVisible;
        };

        $scope.setActiveHouse = function(house){
            $(".house").addClass("exit");
            $timeout(function() {
                $scope.activeHouse = $scope.houses[house];
                $(".house").removeClass("exit");
            },2000);
        };

        $scope.isActiveHouse = function(index){
            return $scope.activeHouse === $scope.houses[index];
        };

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

    }]);// end of controller.