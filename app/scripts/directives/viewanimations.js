'use strict';

/**
 * @ngdoc directive
 * @name membershipSoftwareKioskApp.directive:viewAnimations
 * @description
 * # viewAnimations
 */
angular.module('membershipSoftwareKioskApp')
  .directive('viewAnimations', function (viewAnimationsService, $rootScope) {
    return {
      restrict: 'A',
      link: function (scope, element) {

        var previousEnter, previousLeave;

        var enterAnimation = viewAnimationsService.getEnterAnimation();
        if (enterAnimation) {
          if (previousEnter) element.removeClass(previousEnter);
          previousEnter = enterAnimation;
          element.addClass(enterAnimation);
        }

        $rootScope.$on('event:newLeaveAnimation', function (event, leaveAnimation) {
          if (previousLeave) element.removeClass(previousLeave);
          previousLeave = leaveAnimation;
          element.addClass(leaveAnimation);
        });
      }
    };
  });
