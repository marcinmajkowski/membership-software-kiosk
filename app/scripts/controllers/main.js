'use strict';

/**
 * @ngdoc function
 * @name membershipSoftwareKioskApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the membershipSoftwareKioskApp
 */
angular.module('membershipSoftwareKioskApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.$on('scanEvent', function (event, code) {
      $location.path('/groupNotSelected');
    });

    $scope.$on('stompConnectionStatusEvent', function (event, status) {
      if (!status && $scope.stompConnectionStatus) {
        console.log('WS disconnected');
      }
      $scope.stompConnectionStatus = status;
    });

    $scope.groupSelected = function(group) {
      $location.path('/barcodeScanner');
    };
  });
