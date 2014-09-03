'use strict';

/**
 * @ngdoc function
 * @name vSeeApp.controller:BuildTimeCtrl
 * @description
 * # BuildTimeCtrl
 * Controller of the vSeeApp
 */
angular.module('vSeeApp')
    .controller('BuildTimeCtrl', ['$scope', 'BuildRepository', 'BuildTimeService',
        function ($scope, BuildRepository, BuildTimeService) {
            $scope.data = {};
            $scope.config = {};
            BuildRepository.getAll().then(function (builds) {
                $scope.builds = builds;
                $scope.chartType = 'bar';
                $scope.data.series = moment.monthsShort();
                $scope.$watch('builds', function (builds) {
                    $scope.data.data = BuildTimeService.calculate($scope.data.series, builds);
                }, true);
            });
        }]);
