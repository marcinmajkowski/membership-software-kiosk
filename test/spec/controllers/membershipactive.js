'use strict';

describe('Controller: MembershipactiveCtrl', function () {

  // load the controller's module
  beforeEach(module('membershipSoftwareKioskApp'));

  var MembershipactiveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MembershipactiveCtrl = $controller('MembershipactiveCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MembershipactiveCtrl.awesomeThings.length).toBe(3);
  });
});
