'use strict';

/**
 * @ngdoc service
 * @name vSeeApp.LineChartService
 * @description
 * # LineChartService
 * Service in the vSeeApp.
 */
angular.module('vSeeApp')
    .service('LineChartService', function() {
        return {
            draw: function (labels, data) {
                return {
                    width: 500,
                    height: 500,
                    options: {
                    },
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: 'Green Build Rate',
                                fillColor: 'rgba(220,220,220,0.2)',
                                strokeColor: 'rgba(220,220,220,1)',
                                pointColor: 'rgba(220,220,220,1)',
                                pointStrokeColor: '#fff',
                                pointHighlightFill: '#fff',
                                pointHighlightStroke: 'rgba(220,220,220,1)',
                                data: data
                            }
                        ]
                    }
                };
            }
        };
    });
