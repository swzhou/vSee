'use strict';

/**
 * @ngdoc service
 * @name vSeeApp.BuildRepository
 * @description
 * # BuildRepository
 * Service in the vSeeApp.
 */
angular.module('vSeeApp')
    .service('BuildRepository', ['$q', function BuildRepository($q) {
        var builds = [
            {time: '2014-06-02T09:30:26', status: 'pass'},
            {time: '2014-06-03T09:30:26', status: 'fail'},
            {time: '2014-06-05T09:30:26', status: 'pass'},
            {time: '2014-06-07T09:30:26', status: 'pass'},
            {time: '2014-06-08T09:30:26', status: 'fail'},
            {time: '2014-06-09T09:30:26', status: 'pass'},
            {time: '2014-07-02T09:30:26', status: 'pass'},
            {time: '2014-07-02T09:30:26', status: 'fail'},
            {time: '2014-07-03T09:30:26', status: 'pass'},
            {time: '2014-07-04T09:30:26', status: 'pass'},
            {time: '2014-07-05T09:30:26', status: 'pass'},
            {time: '2014-07-06T09:30:26', status: 'fail'},
            {time: '2014-07-07T09:30:26', status: 'pass'},
            {time: '2014-08-02T09:30:26', status: 'pass'},
            {time: '2014-08-02T09:30:26', status: 'pass'},
            {time: '2014-08-03T09:30:26', status: 'pass'},
            {time: '2014-08-04T09:30:26', status: 'fail'},
            {time: '2014-08-05T09:30:26', status: 'pass'},
            {time: '2014-08-06T09:30:26', status: 'fail'},
            {time: '2014-08-07T09:30:26', status: 'pass'},
            {time: '2014-08-07T09:30:26', status: 'pass'},
            {time: '2014-08-07T09:30:26', status: 'fail'},
            {time: '2014-08-07T09:30:26', status: 'pass'}
        ];

        return {
            getAll: function() {
                var deferred = $q.defer();
                deferred.resolve(builds);
                return deferred.promise;
            }
        };
    }]);
