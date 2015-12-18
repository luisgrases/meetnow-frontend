(function() {
  'use strict';

  angular
    .module('app.events.detail.invited')
    .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider.state('tab.events.invited', {
      url: '/:eventId/:invitedStatus',
      templateUrl: 'app/events/event-detail/events-detail-invited/events-detail-invited.html',
      controller: 'EventsDetailInvitedController as vm'
    });
  }
})();
