'use strict';

describe('Controller: BuildTimeCtrl', function () {

  // load the controller's module
  beforeEach(module('vSeeApp'));

  var BuildTimeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BuildTimeCtrl = $controller('BuildTimeCtrl', {
      $scope: scope
    });
  }));

  xit('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
