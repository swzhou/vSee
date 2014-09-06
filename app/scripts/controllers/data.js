'use strict';

/**
 * @ngdoc function
 * @name vSeeApp.controller:DataCtrl
 * @description
 * # DataCtrl
 * Controller of the vSeeApp
 */
angular.module('vSeeApp')
    .controller('DataCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        $scope.indexesLoaded.then(function () {
            var currentIndex = _.find($scope.indexes, function (index) {
                return $routeParams.index === index.id;
            });
            $http.get(currentIndex.definition).then(function (response) {
                $scope.definitions = response.data;
                _.each($scope.definitions, function (definition) {
                    definition.colspan = definition.type === 'datetime' ? 2 : 1;
                });
            });
        });
    }]);
