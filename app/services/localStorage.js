'use strict';

angular.module('login_poc')
  .factory('StorageService', function() {
    return {
      toJSON: function(item) {
         return JSON.stringify(item);
      },

      fromJSON: function(item) {
         return JSON.parse(item);
      },

      setItem: function(key, item) {
         if (typeof(item) == 'object') item = this.toJSON(item);
         localStorage.setItem(key, item);
      },

      getItem: function(key) {
         return this.fromJSON(localStorage.getItem(key));
      },

      removeItem: function(key) {
         localStorage.removeItem(key);
      }
    }
  });
