angular.module('lpr', ['ui.router', 'ngAnimate', 'ngTouch'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider

  .state('home', {
    url: "/" ,
    controller:  'homeCtrl',
    templateUrl: '../src/views/home.html'
  })
})
