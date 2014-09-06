'use strict';

describe('Service: ChartTypes', function () {

  // load the service's module
  beforeEach(module('vSeeApp'));

  // instantiate service
  var ChartTypes;
  beforeEach(inject(function (_ChartTypes_) {
    ChartTypes = _ChartTypes_;
  }));

  it('should do something', function () {
    expect(!!ChartTypes).toBe(true);
  });

});
