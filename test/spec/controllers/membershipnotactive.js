'use strict';

describe('Controller: MembershipNotActiveCtrl', function () {

  // load the controller's module
  beforeEach(module('membershipSoftwareKioskApp'));

  var MembershipNotActiveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MembershipNotActiveCtrl = $controller('MembershipNotActiveCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MembershipNotActiveCtrl.awesomeThings.length).toBe(3);
  });
});
