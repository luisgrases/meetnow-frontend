(function() {
  'use strict';

  angular
    .module('app.authentication')
    .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider

    .state('authentication', {
      url: '/sign_in',
      templateUrl: 'app/authentication/authentication.html',
      controller: 'AuthenticationController as vm'
    });
  }
})();
