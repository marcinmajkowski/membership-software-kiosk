'use strict';

/**
 * @ngdoc function
 * @name membershipSoftwareKioskApp.controller:BarcodeScannerCtrl
 * @description
 * # BarcodeScannerCtrl
 * Controller of the membershipSoftwareKioskApp
 */
angular.module('membershipSoftwareKioskApp')
  .controller('BarcodeScannerCtrl', function ($scope, $timeout, $location, viewAnimationsService, customerService) {
    var timer = $timeout(function () {
      viewAnimationsService.setEnterAnimation('enter-left');
      viewAnimationsService.setLeaveAnimation('leave-right');
      $location.path('');
    }, 5000);

    $scope.$on('$destroy', function(event) {
      $timeout.cancel(timer);
    });

    $scope.$on('scanEvent', function (event, code) {
      function getCustomerByCardCodeCompleted(customer) {
        viewAnimationsService.setEnterAnimation('enter-right');
        viewAnimationsService.setLeaveAnimation('leave-left');
        $location.path('/membershipActive'); //TODO pass customer data further
      }

      function getCustomerByCardCodeFailed(error) {
        console.log(error); //TODO handle according to status (e.g. 404)

        if (code.match('406$')) {
          viewAnimationsService.setEnterAnimation('enter-fade');
          viewAnimationsService.setLeaveAnimation('leave-top');
          $location.path('/membershipNotActive');
        } else {
          viewAnimationsService.setEnterAnimation('enter-fade');
          viewAnimationsService.setLeaveAnimation('leave-top');
          $location.path('/membershipNotFound');
        }
      }

      customerService.getCustomerByCardCode(code).then(getCustomerByCardCodeCompleted, getCustomerByCardCodeFailed);
    });
  });
