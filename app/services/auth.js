'use strict';

angular.module('login_poc')
  .factory('AuthService', ['$http', '$q', 'httpRequest', ($http, $q, httpRequest) => {
    return {
      login: (data) => {
        const url = '/accounts/login';
        const method = 'POST';
        return httpRequest(url, method, data, $q, $http);
      }
    }
  }]);
