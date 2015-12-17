(function() {
  'use strict';

  angular
    .module('app.events.create.invite')
    .config(routes);

  routes.$inject = ['$stateProvider'];

  function routes($stateProvider) {
    $stateProvider.state('tab.events.create.invite', {
      url: '/create/invite',
      templateUrl: 'app/events/events-create/events-create-invite/events-create-invite.html',
      controller: 'EventsCreateInviteController as vm'
    });
  }
})();
