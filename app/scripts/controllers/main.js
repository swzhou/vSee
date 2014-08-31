'use strict';

/**
 * @ngdoc function
 * @name vSeeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vSeeApp
 */
angular.module('vSeeApp')
    .controller('MainCtrl', ['$scope', 'GreenBuildService', function ($scope, GreenBuildService) {
        $scope.builds = [
            {time: '2014-06-02T09:30:26', status: 'pass'},
            {time: '2014-06-03T09:30:26', status: 'fail'},
            {time: '2014-06-05T09:30:26', status: 'pass'},
            {time: '2014-06-07T09:30:26', status: 'pass'},
            {time: '2014-06-08T09:30:26', status: 'fail'},
            {time: '2014-06-09T09:30:26', status: 'pass'},
            {time: '2014-07-02T09:30:26', status: 'pass'},
            {time: '2014-07-02T09:30:26', status: 'fail'},
            {time: '2014-07-03T09:30:26', status: 'pass'},
            {time: '2014-07-04T09:30:26', status: 'pass'},
            {time: '2014-07-05T09:30:26', status: 'pass'},
            {time: '2014-07-06T09:30:26', status: 'fail'},
            {time: '2014-07-07T09:30:26', status: 'pass'},
            {time: '2014-08-02T09:30:26', status: 'pass'},
            {time: '2014-08-02T09:30:26', status: 'pass'},
            {time: '2014-08-03T09:30:26', status: 'pass'},
            {time: '2014-08-04T09:30:26', status: 'fail'},
            {time: '2014-08-05T09:30:26', status: 'pass'},
            {time: '2014-08-06T09:30:26', status: 'fail'},
            {time: '2014-08-07T09:30:26', status: 'pass'},
            {time: '2014-08-07T09:30:26', status: 'pass'},
            {time: '2014-08-07T09:30:26', status: 'fail'},
            {time: '2014-08-07T09:30:26', status: 'pass'}
        ];
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
        $scope.shouldShowChart = true;
        $scope.showChart = function() {
            $scope.shouldShowChart = true;
        };
        $scope.showData = function() {
            $scope.shouldShowChart = false;
        };
    }]);
