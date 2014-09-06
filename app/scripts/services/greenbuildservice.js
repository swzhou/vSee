'use strict';

/**
 * @ngdoc service
 * @name vSeeApp.GreenBuildService
 * @description
 * # GreenBuildService
 * Service in the vSeeApp.
 */
angular.module('vSeeApp')
    .service('GreenBuildService', function GreenBuildService() {
        return {
            calculate: function (builds) {
                var pipelines = _.groupBy(builds, function (build) {
                    return  build.pipeline;
                });
                return _.map(pipelines, function (pipeline) {
                    var pipelineInfo = _.map(moment.monthsShort(), function () {
                        return {
                            greenNumber: 0,
                            totalNumber: 0
                        }
                    });
                    _.each(pipeline, function (build) {
                        var monthIndex = moment(build.time).month();
                        pipelineInfo[monthIndex].totalNumber += 1;
                        if (build.status === 'pass') {
                            pipelineInfo[monthIndex].greenNumber += 1;
                        }
                    });
                    return _.map(pipelineInfo, function (info) {
                        return info.totalNumber === 0 ? 0 : info.greenNumber / info.totalNumber;
                    });
                });
            }
        };
    });
