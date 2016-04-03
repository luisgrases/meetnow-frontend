(function() {
  'use strict';

  angular
    .module('app.contacts.add')
    .controller('ContactsAddController', ContactsAddController);

  ContactsAddController.$inject = ['ContactsService', '$timeout', 'values'];

  /* @ngInject */
  function ContactsAddController(ContactsService, $timeout, values) {
    var vm = this;
    vm.search = search;
    vm.addContact = addContact;
    vm.ContactsService = ContactsService;
    vm.searchTerm = '';
    ContactsService.searchResults = [];
    vm.values = values;
    vm.isContained = isContained;
    vm.processingButtons = [];
    var timer = null;

    ////////////////


    function search() {
      $timeout.cancel(timer);
      timer = $timeout(function(){
        ContactsService.search(vm.searchTerm);
      }, 700);
    }


    function addContact(contact){
      vm.processingButtons.push(contact);
      ContactsService.addContact(contact).then(function(){
        var index =  vm.processingButtons.indexOf(contact);
        vm.processingButtons.splice(index, 1);
      });
    } 

    function isContained(array, object){
      return (array.indexOf(object) != -1) ? true : false;
    }
  }
})();