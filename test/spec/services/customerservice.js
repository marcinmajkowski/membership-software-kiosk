'use strict';

describe('Service: customerService', function () {

  // load the service's module
  beforeEach(module('membershipSoftwareKioskApp'));

  // instantiate service
  var customerService;
  beforeEach(inject(function (_customerService_) {
    customerService = _customerService_;
  }));

  it('should do something', function () {
    expect(!!customerService).toBe(true);
  });

});
