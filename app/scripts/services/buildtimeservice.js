'use strict';

/**
 * @ngdoc service
 * @name vSeeApp.BuildTimeService
 * @description
 * # BuildTimeService
 * Service in the vSeeApp.
 */
angular.module('vSeeApp')
    .service('BuildTimeService', [function () {
        return {
            calculate: function (series, builds) {
                return _.map(series, function (month, index) {
                    var greenBuilds = _.filter(builds, function (build) {
                        var monthIndex = moment(build.time).month();
                        return  monthIndex === index && build.status === 'pass';
                    });
                    var totalBuildTime = _.reduce(greenBuilds, function (sum, build) {
                        return sum + build.duration;
                    }, 0);
                    var averageBuildTime = greenBuilds.length === 0
                        ? 0
                        : totalBuildTime / greenBuilds.length;
                    return {
                        x: month,
                        y: [averageBuildTime]
                    };
                });
            }
        };
    }]);
