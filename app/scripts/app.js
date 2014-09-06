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
        'mgcrea.ngStrap',
        'colorpicker.module'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/indexes/:index', {
                templateUrl: '../views/index-chart.html',
                controller: 'IndexCtrl'
            })
            .otherwise({
                redirectTo: '/indexes/green-build'
            });
    })
    .run(function(){
        moment.locale('en');
    });
