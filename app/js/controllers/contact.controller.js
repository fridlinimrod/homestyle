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
    
    $scope.name = "";
    $scope.email = "";
    $scope.phone = "";
    $scope.message = "";
    
    $scope.submitContact = function () {
      var data = {
          name: $scope.name,
          phone: $scope.phone,
          email: $scope.email,
          message: $scope.message
      };

      var config = {
          headers : {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          }
        };

  		$http.post("././mail/contact_me.php", $.param(data), config)
     .then(
         function(response){
           alert("תודה :) אצור קשר בהקדם!");
           console.log(response);
         }, 
         function(response){
           alert("אוי... יש תקלהת בבקשה צרו איתי קשר - 052-2611733");
           console.log(response);
         }
      );
  		console.log($scope.name, " ", $scope.phone, " ", $scope.email, " ", $scope.message);
	};

}]);