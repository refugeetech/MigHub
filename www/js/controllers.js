angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    // $scope.$on('$ionicView.enter', function(e) {
    // })

    // Form data for the app modal
    $scope.appData = {}

    // root scope
    $scope.categories = [
      { title: 'Employment', slug: 'employment', color: '#fe5504' },
      { title: 'Housing', slug: 'housing', color: '#00ddff' },
      { title: 'Coordination', slug: 'coordination', color: '#ffdd00' },
      { title: 'Information', slug: 'information', color: '#000055' },
      { title: 'Education', slug: 'education', color: '#ff9966' },
      { title: 'Language', slug: 'language', color: '#55ddb0' },
      { title: 'Social', slug: 'social', color: ' #00ddff' },
      { title: 'Text', slug: 'text', color: '#ffdd00' }
    ]

    $scope.apps = [
      { title: 'Just Arrived', tags: ['employment'] },
      { title: 'WelcomeApp', tags: ['social'] },
      { title: 'Competency.se', tags: ['employment', 'information'] },
      { title: 'Information Sverige', tags: ['information'] },
      { title: 'Kompisbyrån', tags: ['social'] },
      { title: 'Lingio', tags: ['language'] },
      { title: 'Newcomers.io', tags: ['social'] },
      { title: 'Yrkesdörren', tags: ['education'] },
      { title: 'Språkkraft', tags: ['language'] },
      { title: 'Vårdguiden', tags: ['health'] },
      { title: 'Kiron University', tags: ['education'] },
      { title: '400 contacts', tags: ['employment'] },
      { title: 'Novare Potential', tags: ['employment'] },
      { title: 'Refugees Welcome', tags: ['housing'] },
      { title: 'Welcome to Sweden', tags: ['information'] },
      { title: 'Newbie guide to Sweden', tags: ['information'] }
    ]

    // Create the app modal that we will use later
    $ionicModal.fromTemplateUrl('templates/app.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal
    })

    // Triggered in the app modal to close it
    $scope.closeapp = function () {
      $scope.modal.hide()
    }

    // Open the app modal
    $scope.showapp = function () {
      $scope.modal.show()
    }

    // Perform the app action when the user submits the app form
    $scope.doapp = function () {
      $scope.closeapp()
    }
  })

  .controller('CategoriesCtrl', function ($scope) {})

  .controller('CategoryCtrl', function ($scope, $stateParams) {
    $scope.category = $scope.categories.filter(function (category) {
      return category.slug === $stateParams.categoryId
    })[0]

    $scope.apps = $scope.apps.filter(function (app) {
      return app.tags.indexOf($scope.category.slug) > -1
    })
  })
