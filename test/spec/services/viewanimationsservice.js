'use strict';

describe('Service: viewAnimationsService', function () {

  // load the service's module
  beforeEach(module('membershipSoftwareKioskApp'));

  // instantiate service
  var viewAnimationsService;
  beforeEach(inject(function (_viewAnimationsService_) {
    viewAnimationsService = _viewAnimationsService_;
  }));

  it('should do something', function () {
    expect(!!viewAnimationsService).toBe(true);
  });

});
