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
            calculate: function (builds) {
                var groups = _.groupBy(builds, function (build) {
                    return moment(build.time).month();
                });
                return _.map(groups, function (group, index) {
                    var greenBuilds = _.filter(group, function(elem) {
                        return elem.status === 'pass';
                    });
                    var totalBuildTime = _.reduce(greenBuilds, function(sum, build) {
                        return sum + build.duration;
                    }, 0);
                    return {
                        month: moment.monthsShort()[index],
                        value: greenBuilds.length === 0 ? 0 : totalBuildTime / greenBuilds.length
                    };
                });
            }
        };
    }]);
