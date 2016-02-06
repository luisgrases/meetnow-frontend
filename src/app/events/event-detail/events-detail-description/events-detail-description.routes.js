(function() {
  'use strict';

  angular
    .module('app.events.detail.description')
    .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider.state('tab.events.description', {
      url: '/:eventId/description',
      templateUrl: 'app/events/event-detail/events-detail-description/events-detail-description.html',
      controller: 'EventsDetailDescriptionController as vm'
    });
  }
})();
