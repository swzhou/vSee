'use strict';

describe('Service: BuildTimeService', function () {

  // load the service's module
  beforeEach(module('vSeeApp'));

  // instantiate service
  var BuildTimeService;
  beforeEach(inject(function (_BuildTimeService_) {
    BuildTimeService = _BuildTimeService_;
  }));

  it('should do something', function () {
    expect(!!BuildTimeService).toBe(true);
  });

});
