(function() {
  'use strict';

  angular
    .module('app.events')
    .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {

    $stateProvider.state('tab.events', {
      abstract: true,
      url: '/events',
      views: {
        'tab-events': {
          template: '<ion-nav-view></ion-nav-view>'
        }
      }
    });

    $stateProvider.state('tab.events.index', {
      url: '',
      templateUrl: 'app/events/events.html',
      controller: 'EventsController as vm'
    });

    $stateProvider

    
  }
})();
