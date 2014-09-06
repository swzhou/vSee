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
        var colors = [
            {
                fillColor: "rgba(151,187,205,0)",
                strokeColor: "#e67e22",
                pointColor: "rgba(151,187,205,0)",
                pointStrokeColor: "#e67e22",
                pointHighlightFill: '#ffffff'
            },
            {
                fillColor: "rgba(151,187,205,0)",
                strokeColor: "#e67e22",
                pointColor: "rgba(151,187,205,0)",
                pointStrokeColor: "#e67e22",
                pointHighlightFill: '#ffffff'
            }
        ];
        return {
            draw: function (labels, data) {
                var datasets = _.map(data, function (datum, index) {
                    return {
                        fillColor: colors[index].fillColor,
                        strokeColor: colors[index].strokeColor,
                        pointColor: colors[index].pointColor,
                        pointStrokeColor: colors[index].pointStrokeColor,
                        pointHighlightFill: colors[index].pointHighlightFill,
                        data: datum
                    };
                });
                return {
                    labels: labels,
                    datasets: datasets
                };
            }
        };
    });
