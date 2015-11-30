(function() {
  'use strict';

  angular
    .module('app.events')
    .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider

    .state('tab.events', {
      url: '/events',
      views: {
        'tab-events': {
          templateUrl: 'app/events/events.html',
          controller: 'EventsController as vm'
        }
      }
    });
  }
})();
