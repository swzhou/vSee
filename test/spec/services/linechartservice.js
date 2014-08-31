'use strict';

describe('Service: LineChartService', function () {

  // load the service's module
  beforeEach(module('vSeeApp'));

  // instantiate service
  var LineChartService;
  beforeEach(inject(function (_LineChartService_) {
    LineChartService = _LineChartService_;
  }));

  it('should do something', function () {
    expect(!!LineChartService).toBe(true);
  });

});
