(function() {
  'use strict';

  angular
    .module('app.contacts.add')
    .controller('ContactsAddController', ContactsAddController);

  ContactsAddController.$inject = ['ContactsService'];

  /* @ngInject */
  function ContactsAddController(ContactsService) {
    var vm = this;
    vm.search = search;
    vm.addContact = addContact;
    vm.ContactsService = ContactsService;
    vm.searchTerm = '';
    ////////////////


    function search() {
      ContactsService.search(vm.searchTerm);
    }

    function addContact(contact){
      ContactsService.addContact(contact);
    } 
  }
})();