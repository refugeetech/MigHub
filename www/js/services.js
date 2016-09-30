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

    var projects = $resource('https://refugeetech-projecthub-cms.meteorapp.com/api/v02/projects/:id', {id: '@id'}, {
      'get': {method: 'GET', cache: true},
      'query': {method: 'GET', cache: true}
    })
    // var projects = $resource('http://localhost:3000/api/v02/projects/:id', {id: '@id'})
    var categories = $resource('data.json', {}, {
      'get': {method: 'GET', cache: true}
    })

    var getCategories = function () {
      return categories.query()
    }

    var getProjects = function () {
      return projects.get()
    }

    var getProjectById = function (projectId) {
      return projects.get(projectId)
    }

    // var upv = $resource('http://localhost:3000/api/v02/projects/:id/upvote', {id: '@id'})
    // var downv = $resource('http://localhost:3000/api/v02/projects/:id/downvote', {id: '@id'})
    var upv = $resource('https://refugeetech-projecthub-cms.meteorapp.com/api/v02/projects/:id/upvote', {id: '@id'})
    var downv = $resource('https://refugeetech-projecthub-cms.meteorapp.com/api/v02/projects/:id/downvote', {id: '@id'})

    var upVote = function (projectId) {
      upv.get({id: projectId})
    }

    var downVote = function (projectId) {
      downv.get({id: projectId})
    }

    //for newsletter
    var newsletter = $resource('https://refugeetech-projecthub-cms.meteorapp.com/api/v02/newsletter/:email', {email: '@email'})
    var registerEmail = function (mail) {
      newsletter.get({email: mail})
    }

    var emails = function (emailValue) {
      newsletter.get({email: emailValue})
    }

    return {
      favoriteStore: favoriteStore,
      categories: getCategories,
      projects: getProjects,
      projectById: getProjectById,
      upVote: upVote,
      downVote: downVote,
      registerEmail: registerEmail,
      emails: emails
    }

  }
})(window.angular)
