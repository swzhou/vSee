'use strict';

/**
 * @ngdoc directive
 * @name vSeeApp.directive:chartjs
 * @description
 * # chartjs
 */
angular.module('vSeeApp')
    .directive('chartjs', function () {
        return {
            template: '<canvas></canvas>',
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {
                data: '=data',
                options: '=options',
                width: '=width',
                height: '=height',
                responsive: '@'
            },
            link: function (scope, element, attrs) {
                var ctx = element[0].getContext('2d');
                var parent = $(element[0]).parent()[0];
                scope.references = {
                    parent: {
                        obj: parent,
                        width: parent.clientWidth,
                        height: parent.clientHeight
                    },
                    self: {
                        width: scope.width,
                        height: scope.height
                    }
                };

                if (scope.width === '100%') {
                    scope.width = scope.references.parent.width;
                    scope.references.self.width = scope.width;
                    scope.$watch('references.parent.obj.clientWidth', function (newValue) {
                        scope.width = (newValue + scope.references.self.width) / scope.references.parent.width;
                    });
                }

                scope.generate = function () {
                    var chart = new Chart(ctx);
                    var chartType = attrs.isType;
                    scope.instance = chart[chartType](scope.data, scope.options);
                };

                scope.$watch('width', function(newValue){
                    element[0].width = newValue;
                    scope.generate();
                });

                scope.$watch('height',function(newValue) {
                    element[0].height = newValue;
                    scope.generate();
                });

                scope.$watch('data',function() {
                    scope.generate();
                },true);
            }
        };
    });
