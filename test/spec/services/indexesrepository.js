'use strict';

describe('Service: IndexesRepository', function () {

  // load the service's module
  beforeEach(module('vSeeApp'));

  // instantiate service
  var IndexesRepository;
  beforeEach(inject(function (_IndexesRepository_) {
    IndexesRepository = _IndexesRepository_;
  }));

  it('should do something', function () {
    expect(!!IndexesRepository).toBe(true);
  });

});
