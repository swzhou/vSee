'use strict';

/**
 * @ngdoc service
 * @name vSeeApp.color
 * @description
 * # color
 * Service in the vSeeApp.
 */
angular.module('vSeeApp')
  .value('color', [
        {
            fillColor: "rgba(10,166,25,0)",
            strokeColor: "#0ead4e",
            pointColor: "rgba(10,166,25,0)",
            pointStrokeColor: "#0ead4e",
            pointHighlightFill: '#ffffff'
        },
        {
            fillColor: "rgba(242,19,61,0)",
            strokeColor: "#f7113a",
            pointColor: "rgba(242,19,61,0)",
            pointStrokeColor: "#f7113a",
            pointHighlightFill: '#ffffff'
        },
        {
            fillColor: "rgba(77,19,242,0)",
            strokeColor: "#3b0cf5",
            pointColor: "rgba(77,19,242,0)",
            pointStrokeColor: "#3b0cf5",
            pointHighlightFill: '#ffffff'
        },
        {
            fillColor: "rgba(151,187,205,0)",
            strokeColor: "#e67e22",
            pointColor: "rgba(151,187,205,0)",
            pointStrokeColor: "#e67e22",
            pointHighlightFill: '#ffffff'
        }
    ]);
