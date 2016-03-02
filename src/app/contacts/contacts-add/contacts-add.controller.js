(function() {
  'use strict';

  angular
    .module('app.contacts.add')
    .controller('ContactsAddController', ContactsAddController);

  ContactsAddController.$inject = ['ContactsService', '$timeout'];

  /* @ngInject */
  function ContactsAddController(ContactsService, $timeout) {
    var vm = this;
    vm.search = search;
    vm.addContact = addContact;
    vm.ContactsService = ContactsService;
    vm.searchTerm = '';
    var timer = null
    ////////////////


    function search() {
      $timeout.cancel(timer);
      timer = $timeout(function(){
        ContactsService.search(vm.searchTerm);
      }, 700);
    }

    function addContact(contact){
      ContactsService.addContact(contact);
      search();
      ContactsService.reloadContacts();
    } 
  }
})();