'use strict';

/**
 * @ngdoc function
 * @name membershipSoftwareKioskApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the membershipSoftwareKioskApp
 */
angular.module('membershipSoftwareKioskApp')
  .controller('MainCtrl', function ($scope) {
    $scope.$on('scanEvent', function (event, code) {
      console.log(event);
      console.log(code);
      //TODO redirect to profile or to new profile form
    });

    $scope.$on('stompConnectionStatusEvent', function (event, status) {
      if (!status && $scope.stompConnectionStatus) {
        console.log('WS disconnected');
      }
      $scope.stompConnectionStatus = status;
    });
  });
