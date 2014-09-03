'use strict';

/**
 * @ngdoc service
 * @name vSeeApp.BuildRepository
 * @description
 * # BuildRepository
 * Service in the vSeeApp.
 */
angular.module('vSeeApp')
    .service('BuildRepository', ['$q', function($q) {
        var builds = [
            {time: '2014-06-02T09:30:26', status: 'pass', duration: 430},
            {time: '2014-06-03T09:30:26', status: 'fail', duration: 321},
            {time: '2014-06-05T09:30:26', status: 'pass', duration: 355},
            {time: '2014-06-07T09:30:26', status: 'pass', duration: 342},
            {time: '2014-06-08T09:30:26', status: 'fail', duration: 317},
            {time: '2014-06-09T09:30:26', status: 'pass', duration: 322},
            {time: '2014-07-02T09:30:26', status: 'pass', duration: 318},
            {time: '2014-07-02T09:30:26', status: 'fail', duration: 390},
            {time: '2014-07-03T09:30:26', status: 'pass', duration: 442},
            {time: '2014-07-04T09:30:26', status: 'pass', duration: 413},
            {time: '2014-07-05T09:30:26', status: 'pass', duration: 298},
            {time: '2014-07-06T09:30:26', status: 'fail', duration: 276},
            {time: '2014-07-07T09:30:26', status: 'pass', duration: 280},
            {time: '2014-08-02T09:30:26', status: 'pass', duration: 265},
            {time: '2014-08-02T09:30:26', status: 'pass', duration: 299},
            {time: '2014-08-03T09:30:26', status: 'pass', duration: 270},
            {time: '2014-08-04T09:30:26', status: 'fail', duration: 223},
            {time: '2014-08-05T09:30:26', status: 'pass', duration: 264},
            {time: '2014-08-06T09:30:26', status: 'fail', duration: 215},
            {time: '2014-08-07T09:30:26', status: 'pass', duration: 220},
            {time: '2014-08-07T09:30:26', status: 'pass', duration: 217},
            {time: '2014-08-07T09:30:26', status: 'fail', duration: 230},
            {time: '2014-08-07T09:30:26', status: 'pass', duration: 232}
        ];

        return {
            getAll: function() {
                var deferred = $q.defer();
                deferred.resolve(builds);
                return deferred.promise;
            }
        };
    }]);
