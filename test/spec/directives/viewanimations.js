'use strict';

describe('Directive: viewAnimations', function () {

  // load the directive's module
  beforeEach(module('membershipSoftwareKioskApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<view-animations></view-animations>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the viewAnimations directive');
  }));
});
