(function() {
  'use strict';

  angular
    .module('app.contacts')
    .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {

    $stateProvider.state('tab.contacts', {
      abstract: true,
      url: '/contacts',
      views: {
        'tab-contacts': {
          template: '<ion-nav-view></ion-nav-view>'
        }
      }
    });

    $stateProvider.state('tab.contacts.index', {
      url: '',
      templateUrl: 'app/contacts/contacts.html',
      controller: 'ContactsController as vm'
    });




  }
})();
