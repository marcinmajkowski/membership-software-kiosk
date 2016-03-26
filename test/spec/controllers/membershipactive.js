'use strict';

describe('Controller: MembershipActiveCtrl', function () {

  // load the controller's module
  beforeEach(module('membershipSoftwareKioskApp'));

  var MembershipActiveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MembershipActiveCtrl = $controller('MembershipActiveCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MembershipActiveCtrl.awesomeThings.length).toBe(3);
  });
});
