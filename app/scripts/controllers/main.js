'use strict';

/**
 * @ngdoc function
 * @name vSeeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vSeeApp
 */
angular.module('vSeeApp')
    .controller('MainCtrl', ['$scope', '$location', '$routeParams', 'IndexesRepository',
        function ($scope, $location, $routeParams, IndexesRepository) {
        $scope.indexesLoaded = IndexesRepository.getAll().then(function (indexes) {
            $scope.indexes = indexes;
            $scope.isActive = function (index) {
                return $routeParams.index === index.id ? 'active' : '';
            };
            $scope.getTitle = function () {
                var currentIndex = _.find($scope.indexes, function (index) {
                    return $routeParams.index === index.id;
                });
                return !!currentIndex ? currentIndex.name : '';
            };
        });
        $scope.shouldShowChart = true;
        $scope.showChart = function () {
            $scope.shouldShowChart = true;
        };
        $scope.showData = function () {
            $scope.shouldShowChart = false;
        };
    }]);
