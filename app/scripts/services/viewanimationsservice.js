'use strict';

/**
 * @ngdoc service
 * @name membershipSoftwareKioskApp.viewAnimationsService
 * @description
 * # viewAnimationsService
 * Factory in the membershipSoftwareKioskApp.
 */
angular.module('membershipSoftwareKioskApp')
  .factory('viewAnimationsService', function ($rootScope) {

    var enterAnimation;

    var getEnterAnimation = function () {
      return enterAnimation;
    };

    var setEnterAnimation = function (animation) {
      enterAnimation = animation;
    };

    var setLeaveAnimation = function (animation) {
      $rootScope.$emit('event:newLeaveAnimation', animation);
    };

    return {
      getEnterAnimation: getEnterAnimation,
      setEnterAnimation: setEnterAnimation,
      setLeaveAnimation: setLeaveAnimation
    };
  });
