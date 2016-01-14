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

    vm.ContactsService.all();

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