'use strict';

describe('Controller: MembershipnotactiveCtrl', function () {

  // load the controller's module
  beforeEach(module('membershipSoftwareKioskApp'));

  var MembershipnotactiveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MembershipnotactiveCtrl = $controller('MembershipnotactiveCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MembershipnotactiveCtrl.awesomeThings.length).toBe(3);
  });
});
