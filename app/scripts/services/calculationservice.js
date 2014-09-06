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
        return {
            calculate: function (calculatorUrl, data) {
                return $http.get(calculatorUrl).then(function (response) {
                    var calculator = eval('(' + response.data + ')');
                    return calculator(data);
                });
            }
        };
    }]);