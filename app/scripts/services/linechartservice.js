'use strict';

/**
 * @ngdoc service
 * @name vSeeApp.LineChartService
 * @description
 * # LineChartService
 * Service in the vSeeApp.
 */
angular.module('vSeeApp')
    .service('LineChartService', function () {
        return {
            draw: function (labels, data) {
                return {
                    labels: labels,
                    datasets: [
                        {
                            fillColor : "rgba(151,187,205,0)",
                            strokeColor : "#e67e22",
                            pointColor : "rgba(151,187,205,0)",
                            pointStrokeColor : "#e67e22",
                            pointHighlightFill: '#fff',
                            data: data
                        }
                    ]
                };
            }
        };
    });
