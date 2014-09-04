'use strict';

/**
 * @ngdoc function
 * @name vSeeApp.controller:BuildTimeCtrl
 * @description
 * # BuildTimeCtrl
 * Controller of the vSeeApp
 */
angular.module('vSeeApp')
    .controller('BuildTimeCtrl', ['$scope', 'BuildRepository', 'BuildTimeService', 'LineChartService',
        function ($scope, BuildRepository, BuildTimeService, LineChartService) {
            $scope.data = {};
            BuildRepository.getAll().then(function (builds) {
                $scope.builds = builds;
                $scope.options = {};
                var months = moment.monthsShort();
                $scope.$watch('builds', function(builds) {
                    var data = calculateChartData(months, builds);
                    $scope.chart = LineChartService.draw(months, data);
                }, true);
            });

            function calculateChartData(months, builds) {
                var results = BuildTimeService.calculate(builds);
                return _.map(months, function (month) {
                    var result = _.find(results, function (result) {
                        return result.month === month;
                    });
                    return !!result ? result.value : 0;
                });
            }
        }]);
