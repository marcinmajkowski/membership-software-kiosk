'use strict';

describe('Controller: GroupNotSelectedCtrl', function () {

  // load the controller's module
  beforeEach(module('membershipSoftwareKioskApp'));

  var GroupNotSelectedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GroupNotSelectedCtrl = $controller('GroupNotSelectedCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GroupNotSelectedCtrl.awesomeThings.length).toBe(3);
  });
});
