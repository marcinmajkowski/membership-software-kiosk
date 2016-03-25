'use strict';

/**
 * @ngdoc overview
 * @name membershipSoftwareKioskApp
 * @description
 * # membershipSoftwareKioskApp
 *
 * Main module of the application.
 */
angular
  .module('membershipSoftwareKioskApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
