(function() {
  'use strict';

  angular
    .module('app.events.detail.invite')
    .controller('EventsDetailInviteController', EventsDetailInviteController);

  EventsDetailInviteController.$inject = ['EventsService', '$stateParams'];

  /* @ngInject */
  function EventsDetailInviteController(EventsService, $stateParams) {
    var vm = this;
    vm.currentEvent = EventsService.get($stateParams.eventId);



    


    ////////////////
  }
})();