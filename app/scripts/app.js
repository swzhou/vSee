'use strict';

/**
 * @ngdoc overview
 * @name vSeeApp
 * @description
 * # vSeeApp
 *
 * Main module of the application.
 */
angular
    .module('vSeeApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/green-build', {
                templateUrl: 'views/green-build.html',
                controller: 'GreenBuildCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/green-build'
            });
    })
    .run(function(){
        moment.locale('en');
    });
