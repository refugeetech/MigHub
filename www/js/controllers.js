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
    $scope.app = function () {
      $scope.modal.show()
    }

    // Perform the app action when the user submits the app form
    $scope.doapp = function () {
      console.log('Doing app', $scope.appData)

      // Simulate a app delay. Remove this and replace with your app
      // code if using a app system
      $timeout(function () {
        $scope.closeapp()
      }, 1000)
    }
  })

  .controller('CategoriesCtrl', function ($scope) {
    $scope.categories = [
      { title: 'Employment', id: 1, color: "blue", icon: "" },
      { title: 'Housing', id: 2, color: "red" },
      { title: 'Coordination', id: 3, color: "green" },
      { title: 'Information', id: 4, color: "magenta" },
      { title: 'Education', id: 5, color: "purple" },
      { title: 'Language', id: 6, color: "brown" },
      { title: 'Social', id: 7,  color: "yellow" },
      { title: 'Text', id: 8, color: "pink" }
    ]
  })

  .controller('CategoryCtrl', function ($scope, $stateParams) {
    console.log($scope)
  })
