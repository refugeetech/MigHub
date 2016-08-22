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
    
    /* Start favoriteStore */
    /* Using Angular Chaches Local Storage impl to save favorites to localstorage */
    
    // use the localstoreagepolyfill as a fallback if window.localStorage object doesnt exist in browser
    var localStoragePolyfill = {
      getItem: function (key) { /* get something */ },
      setItem: function (key, value) {/* set something */ },
      removeItem: function (key) { /* remove something */ }
    };
    
    // Conditionally use the polyfill
    var options = {
      //maxAge: 15 * 60 * 1000, //there is no max age 
      // cacheFlushInterval: 60 * 60 * 1000, // the chache should should not clear
      // deleteOnExpire: 'aggressive', // should never be deleted
      storageMode: 'localStorage' // This cache will use `localStorage`.§
    };
    if (!window.localStorage) {
      console.log("there is no window localstorage object! == > need to use the localStoragePolyfill")
      options.storageImpl = localStoragePolyfill;
    }
    var favoriteStore = CacheFactory('favoriteStore', options);
    console.log("this is the favorite service",favoriteStore);
    /* End favoriteStore */

    var endpoint = 'https://refugeetech-projecthub-cms.meteorapp.com/api/v02';

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

    var getCategories = function () {
      return $q(function(resolve, reject) {
        // httpRequest('/projects/json')
        //   .then(function(response) {
        //     resolve(response);
        //   });
          $http({url: 'data.json'})
            .then(function(res) {
              resolve(res);
            });
        });
    }



    var getProjects = function (projectId) {
      return $q(function(resolve, reject) {
        httpRequest('/projects')
          .then(function(response) {
            resolve(response);
          });
        });
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
              params: params
            }
          ).then(function(res) {
            cache.put(key, res.data);
            resolve(res.data);
          });
        }
      });
    }

    return {
       favoriteStore: favoriteStore,
       categories: getCategories,
       projects: getProjects,
       projectById: getProjectById,
    };

  }
})();
