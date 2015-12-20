(function() {
  'use strict';

  angular
    .module('app.registration')
    .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider

    .state('tab.registration', {
      url: '/registration',
      templateUrl: 'app/registration/registration.html',
      controller: 'RegistrationController as vm'
    });
  }
})();
