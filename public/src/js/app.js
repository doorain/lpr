angular.module('lpr', ['ui.router', 'ngAnimate', 'ngTouch'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: "/" ,
      controller:  'homeCtrl',
      templateUrl: '../src/views/home.html'
    })
    .state('chemicalServices', {
      url: "/chemServices" ,
      controller:  'chemServicesCtrl',
      templateUrl: '../src/views/chemServices.html'
    })
    .state('burnerMgmt', {
      url: "/burnerMgmt" ,
      controller:  'burnerMgmtCtrl',
      templateUrl: '../src/views/burnerMgmt.html'
    })
    .state('serviceRepair', {
      url: "/serviceRepair" ,
      controller:  'serviceRepairCtrl',
      templateUrl: '../src/views/serviceRepair.html'
    })
    .state('getQuote', {
      url: "/getQuote" ,
      controller:  'getQuoteCtrl',
      templateUrl: '../src/views/getQuote.html'
    })

})
