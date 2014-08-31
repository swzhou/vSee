'use strict';

describe('Directive: chartjs', function () {

    // load the directive's module
    beforeEach(module('vSeeApp'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should show canvas', inject(function ($compile) {
        element = angular.element('<div><chartjs></chartjs></div>');
        element = $compile(element)(scope);
        expect(element.html()).toContain('<canvas');
    }));
});
