'use strict';

angular
  .module('login_poc')
  .config([
    '$routeProvider',
    config
  ]);

  function config($routeProvider) {

    $routeProvider.when('/login', {
      templateUrl: 'views/login.html',
      controller: 'AuthController'
    })
    .otherwise({ redirectTo: '/login' });
  }
