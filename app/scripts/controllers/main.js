'use strict';

/**
 * @ngdoc function
 * @name vSeeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vSeeApp
 */
angular.module('vSeeApp')
    .controller('MainCtrl', ['$scope', '$location', '$routeParams', function ($scope, $location, $routeParams) {
        $scope.metrics = [
            {name: 'Green Build', route: '/indexes/green-build'},
            {name: 'Build Time', route: '/indexes/build-time'},
            {name: 'Test Coverage', route: '/indexes/test-coverage'}
        ];
        $scope.isActive = function(metric) {
            return $location.path() === metric.route ? 'active' : '';
        };

        $scope.getTitle = function() {
            return _.find($scope.metrics, function(metric) {
                return $location.path() === metric.route;
            }).name;
        };

        $scope.shouldShowChart = true;
        $scope.showChart = function () {
            $scope.shouldShowChart = true;
        };
        $scope.showData = function () {
            $scope.shouldShowChart = false;
        };
    }]);
