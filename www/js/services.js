/**
 * API Service
 * @namespace API
 */

;(function () {
  'use strict'

  angular
    .module('mighub.services', [])
    .factory('API', API)

  function API ($resource) {
    var endpoint = 'http://refugeetech-projecthub-cms.meteorapp.com/api/v01/projects/:projectId'
    var Project = $resource(endpoint, {projectId: '@id'}, {list: {method: 'GET', params: {projectId: null}}})

    return {
      projects: _ => Project.list()
    }

  }
})()
