(function() {
  'use strict';

  angular
    .module('app.events.detail')
    .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider.state('tab.events.detail', {
      url: '/:eventId',
      templateUrl: 'app/events/event-detail/event-detail.html',
      controller: 'EventsDetailController as vm'
    });
  }
})();
