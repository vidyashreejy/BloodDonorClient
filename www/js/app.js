// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('BloodDonor', ['ionic', 'BloodDonor.Controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })
  
  .state('app.RequestBlood', {
    url: '/RequestBlood',
    views: {
      'menuContent': {
        templateUrl: 'templates/searchDonors.html',
        controller: 'SearchDonorsCtrl'
      }
    }
  })
  
  .state('app.DisplayDonors', {
    url: '/DisplayDonors',
    views: {
      'menuContent': {
        templateUrl: 'templates/displayDonors.html',
        controller: 'DisplayDonorsCtrl'
      }
    }
  })
  
   .state('app.becomeDonor', {
    url: '/becomeDonor',
    views: {
      'menuContent': {
        templateUrl: 'templates/signUp.html',
        controller: 'signUpCtrl'
      }
    }
  })
  
  .state('app.amenu', {
    url: '/amenu',
    views: {
      'menuContent': {
        templateUrl: 'templates/amenu.html'
      }
    }
  })
  .state('app.viewDonors', {
    url: '/viewDonors',
    views: {
      'menuContent': {
        templateUrl: 'templates/viewDonors.html',
        controller: 'ViewDonorsCtrl'
      }
    }
  })
  
  
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
