'use strict';

/**
 * @ngdoc service
 * @name vSeeApp.BuildRepository
 * @description
 * # BuildRepository
 * Service in the vSeeApp.
 */
angular.module('vSeeApp')
    .service('BuildRepository', ['$http', function($http) {
        return {
            getAll: function() {
                return $http.get('data/json/builds.json').then(function(response) {
                    return response.data;
                });
            }
        };
    }]);
