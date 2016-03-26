'use strict';

/**
 * @ngdoc function
 * @name membershipSoftwareKioskApp.controller:MembershipnotfoundCtrl
 * @description
 * # MembershipnotfoundCtrl
 * Controller of the membershipSoftwareKioskApp
 */
angular.module('membershipSoftwareKioskApp')
  .controller('MembershipnotfoundCtrl', function ($scope, $timeout, $location) {
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
