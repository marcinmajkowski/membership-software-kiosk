'use strict';

describe('Controller: BarcodescannerCtrl', function () {

  // load the controller's module
  beforeEach(module('membershipSoftwareKioskApp'));

  var BarcodescannerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BarcodescannerCtrl = $controller('BarcodescannerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BarcodescannerCtrl.awesomeThings.length).toBe(3);
  });
});
