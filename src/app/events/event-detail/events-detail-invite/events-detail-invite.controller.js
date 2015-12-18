(function() {
  'use strict';

  angular
    .module('app.events.detail.invite')
    .controller('EventsDetailInviteController', EventsDetailInviteController);

  EventsDetailInviteController.$inject = ['EventsService', '$stateParams', 'ContactsService'];

  /* @ngInject */
  function EventsDetailInviteController(EventsService, $stateParams, ContactsService) {
    var vm = this;
    vm.contacts = ContactsService.all();
    vm.currentEvent = EventsService.get($stateParams.eventId);



    


    ////////////////
  }
})();