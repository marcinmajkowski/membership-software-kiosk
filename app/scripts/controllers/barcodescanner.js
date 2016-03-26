'use strict';

/**
 * @ngdoc function
 * @name membershipSoftwareKioskApp.controller:BarcodeScannerCtrl
 * @description
 * # BarcodeScannerCtrl
 * Controller of the membershipSoftwareKioskApp
 */
angular.module('membershipSoftwareKioskApp')
  .controller('BarcodeScannerCtrl', function ($scope, $timeout, $location, viewAnimationsService) {
    var timer = $timeout(function () {
      viewAnimationsService.setEnterAnimation('enter-left');
      viewAnimationsService.setLeaveAnimation('leave-right');
      $location.path('');
    }, 5000);

    $scope.$on('$destroy', function(event) {
      $timeout.cancel(timer);
    });

    $scope.$on('scanEvent', function (event, code) {
      if (code.match('1168$')) {
        viewAnimationsService.setEnterAnimation('enter-right');
        viewAnimationsService.setLeaveAnimation('leave-left');
        $location.path('/membershipActive');
      } else if (code.match('406$')) {
        viewAnimationsService.setEnterAnimation('enter-fade');
        viewAnimationsService.setLeaveAnimation('leave-top');
        $location.path('/membershipNotActive');
      } else {
        viewAnimationsService.setEnterAnimation('enter-fade');
        viewAnimationsService.setLeaveAnimation('leave-top');
        $location.path('/membershipNotFound');
      }
    });

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
