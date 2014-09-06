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
                    var result = BuildTimeService.calculate(builds);
                    $scope.chart = LineChartService.draw(months, result);
                }, true);
            });
        }]);
