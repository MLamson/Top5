;(function (){
  
  'use strict';

  angular.module('Top5', ['ngRoute'])

  .constant('PARSE', {

    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers : {
        'X-Parse-Application-Id' : 'QPhfi521jPOVih27xiiqooP9B2egqpLjKSbRDI2H',
        'X-Parse-REST-API-Key'  : '13hAN2gWrhn6RmijJ3TnZp8RRq7GkvBffVCKRvo4',
        'Content-Type' : 'application/json'
      }
    } 

  })

  .config([ '$routeProvider', function ($routeProvider) {

    $routeProvider

    // Home Page | List of Lists
    .when('/', {
      templateUrl: 'scripts/lists/lists.home.tpl.html',
      controller: 'ListCtrl'
    })

    .when('/login', {
      // Login Page
    })

    // Register page
    .when('/register', {
      templateUrl: 'scripts/users/user.register.tpl.html',
      controller: 'UserCtrl'
    })
    
  }])

}());