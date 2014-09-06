'use strict';

/**
 * @ngdoc function
 * @name vSeeApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the vSeeApp
 */
angular.module('vSeeApp')
    .controller('IndexCtrl', ['$scope', 'BuildRepository', 'CalculationService', 'LineChartService', '$routeParams',
        function ($scope, BuildRepository, CalculationService, LineChartService, $routeParams) {
            BuildRepository.getAll().then(function (data) {
                $scope.data = data;
                $scope.options = {};
                var months = moment.monthsShort();
                $scope.$watch('data', function(data) {
                    CalculationService.calculate($routeParams.index, data).then(function(result) {
                        $scope.chart = LineChartService.draw(months, result);
                    });
                }, true);
            });
        }]);
