'use strict';

/**
 * @ngdoc function
 * @name vSeeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vSeeApp
 */
angular.module('vSeeApp')
    .controller('MainCtrl', ['$scope', 'BuildRepository', 'GreenBuildService', 'LineChartService',
        function ($scope, BuildRepository, GreenBuildService, LineChartService) {
            BuildRepository.getAll().then(function (builds) {
                $scope.builds = builds;
                var results = GreenBuildService.calculate($scope.builds);
                var months = moment.months();
                var data = _.map(months, function (month) {
                    var result = _.find(results, function (result) {
                        return result.month === month;
                    });
                    return !!result ? result.greenRate : 0;
                });
                $scope.chart = LineChartService.draw(months, data);
            });

            $scope.shouldShowChart = true;
            $scope.showChart = function () {
                $scope.shouldShowChart = true;
            };
            $scope.showData = function () {
                $scope.shouldShowChart = false;
            };
        }]);
