angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('page', {
    url: '/testi2',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('login', {
    url: '/page2',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('frontsideOllie', {
    url: '/page3',
    templateUrl: 'templates/frontsideOllie.html',
    controller: 'frontsideOllieCtrl'
  })

  .state('signup', {
    url: '/page4',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('haluanSunPalaavan', {
    url: '/page5',
    templateUrl: 'templates/haluanSunPalaavan.html',
    controller: 'haluanSunPalaavanCtrl'
  })

$urlRouterProvider.otherwise('/page2')


});