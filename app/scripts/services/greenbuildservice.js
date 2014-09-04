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
                var groups = _.groupBy(builds, function (build) {
                    return moment(build.time).month();
                });
                return _.map(groups, function (group, index) {
                    var greenBuildAmount = _.filter(group, function(elem) {
                        return elem.status === 'pass';
                    }).length;
                    return {
                        month: moment.monthsShort()[index],
                        greenRate: greenBuildAmount / group.length
                    };
                });
            }
        };
    });
