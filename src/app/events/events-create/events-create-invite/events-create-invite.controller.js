(function() {
  'use strict';
  angular
    .module('app.events.create.invite')
    .controller('EventsCreateInviteController', EventsCreateInviteController);

  EventsCreateInviteController.$inject = ['EventsService', 'ContactsService'];

  /* @ngInject */
  function EventsCreateInviteController(EventsService, ContactsService) {
    var vm = this;
    vm.ContactsService = ContactsService;
    vm.EventsService = EventsService;
    vm.inviteContact = inviteContact;
    vm.uninviteContact = uninviteContact;
    activate();

    ////////////////

    function activate() {
    }

    function inviteContact(contact){
      EventsService.newEvent.users.push(contact);
      contact.hide = true;
    }
    function uninviteContact(contact){
      var index = EventsService.newEvent.users.indexOf(contact);
      if (index > -1) {
        EventsService.newEvent.users.splice(index, 1);
      }
      contact.hide = false;
    }


  }
})();
