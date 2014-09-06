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
                    return {
                        label: lineLabels[index],
                        fillColor: color[index].fillColor,
                        strokeColor: color[index].strokeColor,
                        pointColor: color[index].pointColor,
                        pointStrokeColor: color[index].pointStrokeColor,
                        pointHighlightFill: color[index].pointHighlightFill,
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
