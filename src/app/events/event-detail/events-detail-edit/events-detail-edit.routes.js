(function() {
  'use strict';

  angular
    .module('app.events.detail.edit')
    .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider.state('tab.events.edit', {
      url: '/:eventId/edit',
      templateUrl: 'app/events/event-detail/events-detail-edit/event-detail-edit.html',
      controller: 'EventsDetailEditController as vm'
    });
  }
})();
