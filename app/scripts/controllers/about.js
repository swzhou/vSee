'use strict';

/**
 * @ngdoc function
 * @name vSeeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the vSeeApp
 */
angular.module('vSeeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
