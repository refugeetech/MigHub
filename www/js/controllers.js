angular.module('starter.controllers', [])

  .controller('AppCtrl', function (
    $scope,
    $ionicModal,
    $timeout,
    API,
    $ionicActionSheet,
    $translate
  ) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    // $scope.$on('$ionicView.enter', function(e) {
    // })

    // Triggered on a button click, or some other target
    $scope.show = function () {
      // Show the action sheet
      var buttons = [
        {
          text: 'Svenska',
          code: 'sv'
        },
        {
          text: 'English',
          code: 'en'
        },
        {
          text: 'زبان فارسي',
          code: 'fa'
        },
        {
          text: 'اللغة العربية',
          code: 'ar'
        },
      ]

      $ionicActionSheet.show({
        buttons: buttons,
        titleText: $translate.instant('choose_language'),
        cancelText: 'Cancel',
        cancel: function () {
          // add cancel code..
        },
        buttonClicked: function (index) {
          setLocale(buttons[index].code)
          return true
        }
      })
    }

    var setLocale = function (locale) {
      console.log('Set language: ', locale)
      $translate.use(locale)
    }

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

    $scope.apps = []

    var projects = API.projects()
    projects.$promise
    .then(function (result) { return result.data })
    .then(function (projects) {
      $scope.apps = projects
        .map(function (project) {
          project.logo = project.links.reduce(function (a, b) {
            if (b.type === 'logo') return b.url
            return a
          }, '')
          return project
        })
        .map(function (project) {
          return { title: project.name, tags: project.tags, logo: project.logo, description: project.description }
        })

      $scope.categories.forEach(function (category) {
        category.projects = projects.filter(function (project) {
          return project.tags.indexOf(category.slug)
        })
      })

      console.log('projects', projects)
    })

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
    $scope.showapp = function (app) {
      $scope.app = app
      $scope.modal.show()
    }

    // Perform the app action when the user submits the app form
    $scope.doapp = function () {
      $scope.closeapp()
    }
  })

  .controller('CategoriesCtrl', function ($scope, API) {
  
  })

  .controller('CategoryCtrl', function ($scope, $stateParams) {
    $scope.category = $scope.categories.filter(function (category) {
      return category.slug === $stateParams.categoryId
    })[0]

    $scope.apps = $scope.apps.filter(function (app) {
      return app.tags.indexOf($scope.category.slug) > -1
    })
  })
