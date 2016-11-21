angular.module('mgmtApp', ['ui.router', 'satellizer', 'ngAnimate', 'ngTouch'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider

  .state('home', {
    url: "/" ,
    controller:  'homeCtrl',
    templateUrl: '../src/view/home.html',
    restricted: false
  })
})
