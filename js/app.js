'use strict';

var ttApp=angular.module('ttApp',['ngRoute','ngResource','controllers','firebase']);

var controllers=angular.module('controllers',[]);
ttApp.config(['$routeProvider',function ($routeProvide) {
    $routeProvide
        .when("/",
            {
                templateUrl: 'template/feed.html',
                controller:"MessageCtrl"
            }
        )
        
        .when('/registration',{
            templateUrl: 'template/registration.html'
        })
        .when('/profile/:profile', {
            templateUrl: 'template/profile.html',
            controller:"MessageCtrl"
        })
        .otherwise({ redirectTo: '/' })
    ;
    }]

);