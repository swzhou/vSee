'use strict';

/**
 * @ngdoc function
 * @name vSeeApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the vSeeApp
 */
angular.module('vSeeApp')
    .controller('IndexCtrl', ['$scope', 'CalculationService', 'LineChartService', '$routeParams', '$http',
        function ($scope, CalculationService, LineChartService, $routeParams, $http) {
            $scope.indexesLoaded.then(function() {
                var currentIndex = _.find($scope.indexes, function (index) {
                    return $routeParams.index === index.id;
                });
                $http.get(currentIndex.data).then(function (response) {
                    $scope.data = response.data;
                    $scope.options = {};
                    var months = moment.monthsShort();
                    $scope.$watch('data', function(data) {
                        CalculationService.calculate(currentIndex.calculator, data).then(function(result) {
                            $scope.chart = LineChartService.draw(months, result);
                        });
                    }, true);
                });
            });
        }]);
