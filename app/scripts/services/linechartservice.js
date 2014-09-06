'use strict';

/**
 * @ngdoc service
 * @name vSeeApp.LineChartService
 * @description
 * # LineChartService
 * Service in the vSeeApp.
 */
angular.module('vSeeApp')
    .service('LineChartService', ['color', function (color) {
        return {
            draw: function (labels, result) {
                var lineLabels = result.labels;
                var data = result.data;
                var datasets = _.map(data, function (datum, index) {
                    var colorIndex = index % color.length;
                    return {
                        label: lineLabels[index],
                        fillColor: color[colorIndex].fillColor,
                        strokeColor: color[colorIndex].strokeColor,
                        pointColor: color[colorIndex].pointColor,
                        pointStrokeColor: color[colorIndex].pointStrokeColor,
                        pointHighlightFill: color[colorIndex].pointHighlightFill,
                        data: datum
                    };
                });
                return {
                    labels: labels,
                    datasets: datasets
                };
            }
        };
    }]);
