'use strict';

/**
 * @ngdoc function
 * @name membershipSoftwareKioskApp.controller:GroupNotSelectedCtrl
 * @description
 * # GroupNotSelectedCtrl
 * Controller of the membershipSoftwareKioskApp
 */
angular.module('membershipSoftwareKioskApp')
  .controller('GroupNotSelectedCtrl', function ($scope, $timeout, $location, viewAnimationsService) {
    var timer = $timeout(function () {
      viewAnimationsService.setEnterAnimation('enter-right');
      viewAnimationsService.setLeaveAnimation('leave-left');
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
