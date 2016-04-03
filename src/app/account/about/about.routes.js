(function() {
  'use strict';

  angular
    .module('app.account.about')
    .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider

    .state('tab.account.about', {
      url: '/about',
      templateUrl: 'app/account/about/about.html',
      controller: 'AboutController as vm'
    });
    
  }
})();
