(function() {
  'use strict';

  angular
    .module('app.contacts')
    .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider

    .state('tab.contacts', {
      url: '/contacts',
      views: {
        'tab-contacts': {
          templateUrl: 'app/contacts/contacts.html',
          controller: 'ContactsController as vm'
        }
      }
    });
  }
})();
