'use strict';

/**
 * @ngdoc service
 * @name vSeeApp.CalculationService
 * @description
 * # CalculationService
 * Service in the vSeeApp.
 */
angular.module('vSeeApp')
    .service('CalculationService', ['$http', function ($http) {
        var calculators = {};
        return {
            register: function (name, url) {
                calculators[name] = url;
            },
            calculate: function (name, data) {
                return $http.get(calculators[name]).then(function (response) {
                    var calculator = eval('(' + response.data + ')');
                    return calculator(data);
                });
            }
        };
    }])
    .run(['CalculationService', function (CalculationService) {
        CalculationService.register('green-build', 'data/calculators/green-build.js');
        CalculationService.register('build-time', 'data/calculators/build-time.js');
    }]);