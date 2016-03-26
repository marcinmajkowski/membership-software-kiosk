'use strict';

describe('Controller: MembershipNotFoundCtrl', function () {

  // load the controller's module
  beforeEach(module('membershipSoftwareKioskApp'));

  var MembershipNotFoundCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MembershipNotFoundCtrl = $controller('MembershipNotFoundCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MembershipNotFoundCtrl.awesomeThings.length).toBe(3);
  });
});
