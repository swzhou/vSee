'use strict';

/**
 * @ngdoc function
 * @name vSeeApp.controller:GreenBuildCtrl
 * @description
 * # GreenBuildCtrl
 * Controller of the vSeeApp
 */
angular.module('vSeeApp')
    .controller('GreenBuildCtrl', ['$scope', 'BuildRepository', 'GreenBuildService', 'LineChartService',
        function ($scope, BuildRepository, GreenBuildService, LineChartService) {
            BuildRepository.getAll().then(function (builds) {
                $scope.builds = builds;
                $scope.options = {};
                var months = moment.monthsShort();
                $scope.$watch('builds', function(builds) {
                    var result = GreenBuildService.calculate(builds);
                    $scope.chart = LineChartService.draw(months, result);
                }, true);
            });
        }]);
