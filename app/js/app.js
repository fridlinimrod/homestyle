'use strict';

/* App Module */

var homeStylingApp = angular.module('homestylingapp', [
  'ngRoute'/*,
  'phonecatAnimations',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'*/
]);

homeStylingApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/mywork', {
        templateUrl: 'partials/mywork.html',
        controller: 'MyWorkCtrl'
      }).
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      // when('/phones/:phoneId', {
      //   templateUrl: 'partials/phone-detail.html',
      //   controller: 'PhoneDetailCtrl'
      // }).
      when('/underConstructions', {
        templateUrl: 'partials/underConstructions.html',
        controller: 'underConstructionsCtrl'
      }).
      otherwise({
        redirectTo: '/partials/underConstructions'
      });
  }]);