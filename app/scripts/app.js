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
        'ngTouch',
        'angularCharts',
        'angles',
        'mgcrea.ngStrap'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/green-build', {
                templateUrl: 'views/green-build.html',
                controller: 'GreenBuildCtrl'
            })
            .when('/build-time', {
              templateUrl: 'views/build-time.html',
              controller: 'BuildTimeCtrl'
            })
            .otherwise({
                redirectTo: '/green-build'
            });
    })
    .run(function(){
        moment.locale('en');
    });
