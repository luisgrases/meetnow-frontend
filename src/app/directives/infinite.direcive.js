var module = angular.module('app.directives');
module.directive('infinite', function($rootScope) {
  return {
    restrict: 'E',
    scope: {
      number: '@'
    },
    template: 'hola'
  };


});