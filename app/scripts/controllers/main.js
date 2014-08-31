'use strict';

/**
 * @ngdoc function
 * @name vSeeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vSeeApp
 */
angular.module('vSeeApp')
  .controller('MainCtrl', function ($scope) {
        $scope.myChart = {
            width : 500,
            height : 500,
            options : {},
            data : [
                {
                    value: 30,
                    color:'#F7464A'
                },
                {
                    value : 50,
                    color : '#E2EAE9'
                },
                {
                    value : 100,
                    color : '#D4CCC5'
                },
                {
                    value : 40,
                    color : '#949FB1'
                },
                {
                    value : 120,
                    color : '#4D5360'
                }
            ]
        };
  });
