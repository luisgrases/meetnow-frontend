(function() {
  'use strict';

  angular
    .module('app.contacts')
    .controller('ContactsController', ContactsController);

  ContactsController.$inject = ['ContactsService', '$state'];

  /* @ngInject */
  function ContactsController(ContactsService, $state) {
    var vm = this;
    vm.contacts = ContactsService.all();
    vm.remove = remove;
    vm.goToAddContacts = goToAddContacts;

    activate();

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