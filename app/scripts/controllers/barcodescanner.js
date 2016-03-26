'use strict';

/**
 * @ngdoc function
 * @name membershipSoftwareKioskApp.controller:BarcodescannerCtrl
 * @description
 * # BarcodescannerCtrl
 * Controller of the membershipSoftwareKioskApp
 */
angular.module('membershipSoftwareKioskApp')
  .controller('BarcodescannerCtrl', function ($scope, $timeout, $location) {
    var timer = $timeout(function () {
      $location.path('');
    }, 5000);

    $scope.$on('$destroy', function(event) {
      $timeout.cancel(timer);
    });

    $scope.$on('scanEvent', function (event, code) {
      if (code.match('1168$')) {
        $location.path('/membershipActive');
      } else if (code.match('406$')) {
        $location.path('/membershipNotActive');
      } else {
        $location.path('/membershipNotFound');
      }
    });

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
