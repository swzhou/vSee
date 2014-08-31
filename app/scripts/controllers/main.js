'use strict';

/**
 * @ngdoc function
 * @name vSeeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vSeeApp
 */
angular.module('vSeeApp')
    .controller('MainCtrl', ['$scope', 'BuildRepository', 'GreenBuildService',
        function ($scope, BuildRepository, GreenBuildService) {
        BuildRepository.getAll().then(function(builds) {
            $scope.builds = builds;
            var results = GreenBuildService.calculate($scope.builds);
            var data = _.map(moment.months(), function(month) {
                var result = _.find(results, function(result) {
                    return result.month === month;
                });
                return !!result? result.greenRate : 0;
            });
            $scope.myChart = {
                width: 500,
                height: 500,
                options: {
                },
                data: {
                    labels: moment.months(),
                    datasets: [
                        {
                            label: 'Green Build Rate',
                            fillColor: "rgba(220,220,220,0.2)",
                            strokeColor: "rgba(220,220,220,1)",
                            pointColor: "rgba(220,220,220,1)",
                            pointStrokeColor: "#fff",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgba(220,220,220,1)",
                            data: data
                        }
                    ]
                }
            };
        });

        $scope.shouldShowChart = true;
        $scope.showChart = function() {
            $scope.shouldShowChart = true;
        };
        $scope.showData = function() {
            $scope.shouldShowChart = false;
        };
    }]);
