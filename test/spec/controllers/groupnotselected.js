'use strict';

describe('Controller: GroupnotselectedCtrl', function () {

  // load the controller's module
  beforeEach(module('membershipSoftwareKioskApp'));

  var GroupnotselectedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GroupnotselectedCtrl = $controller('GroupnotselectedCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GroupnotselectedCtrl.awesomeThings.length).toBe(3);
  });
});
