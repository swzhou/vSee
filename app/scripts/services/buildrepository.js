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
            {pipeline: 'app1', time: '2014-06-02T09:30:26', status: 'pass', duration: 430},
            {pipeline: 'app1', time: '2014-06-03T09:30:26', status: 'fail', duration: 321},
            {pipeline: 'app1', time: '2014-06-05T09:30:26', status: 'pass', duration: 355},
            {pipeline: 'app1', time: '2014-06-07T09:30:26', status: 'pass', duration: 342},
            {pipeline: 'app1', time: '2014-06-08T09:30:26', status: 'fail', duration: 317},
            {pipeline: 'app1', time: '2014-06-09T09:30:26', status: 'pass', duration: 322},
            {pipeline: 'app1', time: '2014-07-02T09:30:26', status: 'pass', duration: 318},
            {pipeline: 'app1', time: '2014-07-02T09:30:26', status: 'fail', duration: 390},
            {pipeline: 'app1', time: '2014-07-03T09:30:26', status: 'pass', duration: 442},
            {pipeline: 'app1', time: '2014-07-04T09:30:26', status: 'pass', duration: 413},
            {pipeline: 'app1', time: '2014-07-05T09:30:26', status: 'pass', duration: 298},
            {pipeline: 'app1', time: '2014-07-06T09:30:26', status: 'fail', duration: 276},
            {pipeline: 'app1', time: '2014-07-07T09:30:26', status: 'pass', duration: 280},
            {pipeline: 'app1', time: '2014-08-02T09:30:26', status: 'pass', duration: 265},
            {pipeline: 'app1', time: '2014-08-02T09:30:26', status: 'pass', duration: 299},
            {pipeline: 'app1', time: '2014-08-03T09:30:26', status: 'pass', duration: 270},
            {pipeline: 'app1', time: '2014-08-04T09:30:26', status: 'fail', duration: 223},
            {pipeline: 'app1', time: '2014-08-05T09:30:26', status: 'pass', duration: 264},
            {pipeline: 'app1', time: '2014-08-06T09:30:26', status: 'fail', duration: 215},
            {pipeline: 'app1', time: '2014-08-07T09:30:26', status: 'pass', duration: 220},
            {pipeline: 'app2', time: '2014-06-07T09:30:26', status: 'pass', duration: 217},
            {pipeline: 'app2', time: '2014-06-07T09:30:26', status: 'fail', duration: 1234},
            {pipeline: 'app2', time: '2014-06-07T09:30:26', status: 'pass', duration: 1023},
            {pipeline: 'app2', time: '2014-07-07T09:30:26', status: 'pass', duration: 1005},
            {pipeline: 'app2', time: '2014-07-07T09:30:26', status: 'fail', duration: 1006},
            {pipeline: 'app2', time: '2014-07-07T09:30:26', status: 'pass', duration: 998},
            {pipeline: 'app2', time: '2014-07-07T09:30:26', status: 'pass', duration: 1020},
            {pipeline: 'app2', time: '2014-07-07T09:30:26', status: 'pass', duration: 966},
            {pipeline: 'app2', time: '2014-07-07T09:30:26', status: 'pass', duration: 993},
            {pipeline: 'app2', time: '2014-08-07T09:30:26', status: 'pass', duration: 812},
            {pipeline: 'app2', time: '2014-08-07T09:30:26', status: 'fail', duration: 993},
            {pipeline: 'app2', time: '2014-08-07T09:30:26', status: 'pass', duration: 855},
            {pipeline: 'app2', time: '2014-08-07T09:30:26', status: 'pass', duration: 212}
        ];

        return {
            getAll: function() {
                var deferred = $q.defer();
                deferred.resolve(builds);
                return deferred.promise;
            }
        };
    }]);
