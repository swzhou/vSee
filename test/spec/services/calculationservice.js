'use strict';

describe('Service: CalculationService', function () {

  // load the service's module
  beforeEach(module('vSeeApp'));

  // instantiate service
  var GreenBuildService;
  beforeEach(inject(function (_GreenBuildService_) {
    GreenBuildService = _GreenBuildService_;
  }));

  it('should do something', function () {
    expect(!!GreenBuildService).toBe(true);
  });

});
