(function() {
  'use strict';

  angular
    .module('app.account.terms')
    .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider

    .state('tab.account.terms', {
      url: '/terms',
      templateUrl: 'app/account/terms/terms.html',
      controller: 'TermsController as vm'
    });
    
  }
})();
