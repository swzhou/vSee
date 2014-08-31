'use strict';

describe('Service: BuildRepository', function () {

  // load the service's module
  beforeEach(module('vSeeApp'));

  // instantiate service
  var BuildRepository;
  beforeEach(inject(function (_BuildRepository_) {
    BuildRepository = _BuildRepository_;
  }));

  it('should do something', function () {
    expect(!!BuildRepository).toBe(true);
  });

});
