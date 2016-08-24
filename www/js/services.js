/**
 * API Service
 * @namespace API
 */

;(function (angular) {
  'use strict'

  angular
    .module('mighub.services', [])
    .factory('API', API)

  function API ($resource) {
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
      categories: getCategories,
      projects: getProjects,
      projectById: getProjectById
    }

  }
})(window.angular)
