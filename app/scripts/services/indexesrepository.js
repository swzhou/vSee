'use strict';

/**
 * @ngdoc service
 * @name vSeeApp.IndexesRepository
 * @description
 * # IndexesRepository
 * Service in the vSeeApp.
 */
angular.module('vSeeApp')
  .service('IndexesRepository', ['$http', function($http) {
        return {
            getAll: function() {
                return $http.get('data/json/indexes.json').then(function(response) {
                    return response.data;
                });
            }
        };
  }]);
