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
        controller: 'myWorkCtrl'
      }).
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl'
      }).
      // when('/phones/:phoneId', {
      //   templateUrl: 'partials/phone-detail.html',
      //   controller: 'PhoneDetailCtrl'
      // }).
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'aboutCtrl'
      }).
      when('/contact', {
        templateUrl: 'partials/contact.html',
        // controller: 'aboutCtrl'
      }).
      when('/beforeAfter', {
        templateUrl: 'partials/beforeAfter.html',
        // controller: 'aboutCtrl'
      }).      
      otherwise({
        redirectTo: '/home'
      });
  }]);