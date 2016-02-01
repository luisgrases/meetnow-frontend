var module = angular.module('app.directives', []);
module.directive('hideTabs', function($rootScope) {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {

            scope.$on('$ionicView.beforeEnter', function() {
                scope.$watch(attributes.hideTabs, function(value){
                    $rootScope.hideTabs = value;
                });
            });

            scope.$on('$ionicView.beforeLeave', function() {
                scope.$watch(attributes.hideTabs, function(value){
                    $rootScope.hideTabs = false;
                });
            });
        }
    };
});