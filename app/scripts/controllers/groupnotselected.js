'use strict';

/**
 * @ngdoc function
 * @name membershipSoftwareKioskApp.controller:GroupnotselectedCtrl
 * @description
 * # GroupnotselectedCtrl
 * Controller of the membershipSoftwareKioskApp
 */
angular.module('membershipSoftwareKioskApp')
  .controller('GroupnotselectedCtrl', function ($scope, $timeout, $location) {
    var timer = $timeout(function () {
      $location.path('');
    }, 3000);

    $scope.$on('$destroy', function(event) {
      $timeout.cancel(timer);
    });

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
