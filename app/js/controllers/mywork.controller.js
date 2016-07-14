'use strict';

/**
 * @ngdoc function
 * @name noadvashApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the noadvashApp
 */


 angular.module('homestylingapp')
  .controller('myWorkCtrl', ['$scope', "housesService", function ($scope, housesService) {
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
        });

        $scope.toggleTextVisibility = function(house){
            house.isTextVisible = ! house.isTextVisible;
        };
    }]);// end of controller.