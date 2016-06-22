/**
 * API Service
 * @namespace API
 */

(function(){

  'use strict';

  angular
    .module('mighub.services', [])
    .factory('API', API)
  ;

  API.$inject = ['$http', '$q', 'CacheFactory', '$httpParamSerializer'];

  function API($http, $q, CacheFactory, $httpParamSerializer) {

    var endpoint = 'https://refugeetech-projecthub-cms.meteorapp.com/api/v01';

    // Check to make sure the cache doesn't already exist
    if (!CacheFactory.get('categoriesDataCache')) {
      new CacheFactory('categoriesDataCache', {
        onExpire: function (key, value) {
          var _this = this; // "this" is the cache in which the item expired
          $http(
            {
              url: key,
              headers: headers
            }
          ).success(function(data) {
            _this.put(key, data);
          });
  
        }
      });
    }
  
    //@TODO: filter out categories from the projects (alt: fix an endpoint for categories in the backend)
    var getCategories = function () {
      return $q(function(resolve, reject) {
        httpRequest('/projects')
          .then(function(response) {
            resolve(response);
          });
      })
    }
  
    var getProjectById = function (projectId) {
      return $q(function(resolve, reject) {
        httpRequest('/projects/' + projectId)
          .then(function(response) {
            resolve(response);
          });
        });
    }
  
    var httpRequest = function (url, params) {
      return $q(function(resolve, reject) {
  
        var cache = CacheFactory.get('categoriesDataCache'),
            key = endpoint + url + '?' + $httpParamSerializer(params);
  
        if (cache.get(key)) {
          resolve(cache.get(key));
        } else {
          $http(
            {
              url: endpoint + url,
              params: params,
              options: {'content-type' : 'application/json;charset=UTF-8'}
            }
          ).then(function(res) {
            cache.put(key, res.data);
            resolve(res.data);
          });
        }
      });
    }
  
    return {
        categories: getCategories,
        projectById: getProjectById
    };
  
  }
})();
