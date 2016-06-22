// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module(
  'starter',
  ['ionic', 'starter.controllers', 'angular-cache', 'mighub.constants', 'mighub.services', 'pascalprecht.translate', 'localeapp.translations', 'ngResource']
)

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true)
        cordova.plugins.Keyboard.disableScroll(true)

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault()
      }
    })
  })

  .config(function ($stateProvider, $urlRouterProvider, CacheFactoryProvider, $translateProvider) {
    angular.extend(CacheFactoryProvider.defaults, {
      maxAge: 15 * 60 * 1000, // 15 minutes
      deleteOnExpire: 'aggressive',
      onExpire: function (key, value) {
        var _this = this; // "this" is the cache in which the item expired
        angular.injector(['ng']).get('$http').get(key).success(function (data) {
          _this.put(key, data)
        })
      }
    })

    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.search', {
        url: '/search',
        views: {
          'menuContent': {
            templateUrl: 'templates/search.html'
          }
        }
      })

      .state('app.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'templates/browse.html'
          }
        }
      })
      .state('app.categories', {
        url: '/categories',
        views: {
          'menuContent': {
            templateUrl: 'templates/categories.html',
            controller: 'CategoriesCtrl'
          }
        }
      })

      .state('app.single', {
        url: '/categories/:categoryId',
        animate: 'slide-in-up',
        views: {
          'menuContent': {
            templateUrl: 'templates/category.html',
            controller: 'CategoryCtrl'
          }
        }
      })
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/categories')

    $translateProvider
      .preferredLanguage('en')
      //.useSanitizeValueStrategy('sanitize')
  })
