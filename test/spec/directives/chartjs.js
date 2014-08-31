'use strict';

describe('Directive: chartjs', function () {

  // load the directive's module
  beforeEach(module('vSeeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<chartjs></chartjs>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the chartjs directive');
  }));
});
