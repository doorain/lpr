angular.module('lpr')
.directive('headerDirective', function() {
  var controller = function($scope, $state, mainService, $rootScope) {

return {
  restrict: 'AE',
  controller: controller,
  templateUrl: '../src/view/template/headerTmpl.html'
}


})
