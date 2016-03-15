(function() {
  angular
    .module('app')
    .directive('title', title)

    function title(){
      return {
        restrict: 'E',
        replace: true,
        scope: {
          title: '@'
        },
        template: '<ion-spinner icon="lines" class="spinner-balanced"></ion-spinner>'
      }

    }

})();