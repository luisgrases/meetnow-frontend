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
    vm.ContactsService = ContactsService;
    vm.searchTerm = '';
    ////////////////


    function search() {
      ContactsService.search(vm.searchTerm);
    }

  }
})();