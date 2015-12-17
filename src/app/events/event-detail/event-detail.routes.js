(function() {
  'use strict';

  angular
    .module('app.events.detail')
    .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider.state('tab.events.detail', {
      url: '/:event',
      templateUrl: 'app/events/events-detail.html',
      controller: 'EventsDetailController as vm'
    });
  }
})();
