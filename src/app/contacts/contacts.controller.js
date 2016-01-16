(function() {
  'use strict';

  angular
    .module('app.contacts')
    .controller('ContactsController', ContactsController);

  ContactsController.$inject = ['ContactsService', '$state'];

  /* @ngInject */
  function ContactsController(ContactsService, $state) {
    var vm = this;
    vm.remove = remove;
    vm.goToAddContacts = goToAddContacts;
    vm.ContactsService = ContactsService;

    vm.ContactsService.accepted();
    vm.ContactsService.requestsSent();
    vm.ContactsService.requestsRecieved();

    ////////////////

    function activate() {
    }

    function remove(event) {
      EventsService.remove(event);
    }

    function goToAddContacts(){
      $state.go("tab.contacts.add");
    }
  }
})();