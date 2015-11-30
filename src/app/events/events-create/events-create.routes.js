(function() {
  'use strict';

  angular
    .module('app.events.create')
    .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider.state('tab.events.create', {
      url: '/create',
      templateUrl: '/app/events/events-create/events-create.html',
      controller: 'EventsCreateController as vm'
    });
  }
})();
