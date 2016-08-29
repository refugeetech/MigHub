/**
 * API Service
 * @namespace API
 */

;(function (angular) {
  'use strict'

  angular
    .module('mighub.services', [])
    .factory('API', API)

  function API ($resource, $cacheFactory) {

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
    // var favoriteStore = CacheFactory('favoriteStore', options);
    var favoriteStore = $cacheFactory('favoriteStore', options);
    //init
    var favorites = []
    favoriteStore.put("favorites", favorites)
    //console.log("this is the favorite service",favoriteStore);
    /* End favoriteStore */

    var projects = $resource('https://refugeetech-projecthub-cms.meteorapp.com/api/v02/projects/:id', {id: '@id'})
    var categories = $resource('data.json')

    var getCategories = function () {
      return categories.query()
    }

    var getProjects = function () {
      return projects.get()
    }

    var getProjectById = function (projectId) {
      return projects.get(projectId)
    }

    return {
      favoriteStore: favoriteStore,
      categories: getCategories,
      projects: getProjects,
      projectById: getProjectById
    }

  }
})(window.angular)
