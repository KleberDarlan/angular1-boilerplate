'use strict';

angular.module('login_poc')
  .factory('AuthService', AuthService);

function AuthService($http, $q, httpRequest) {
  const factory = {
    login: (data) => {
      const url = '/accounts/login';
      const method = 'POST';
      return httpRequest(url, method, data, $q, $http);
    }
  };

  return factory;
}
