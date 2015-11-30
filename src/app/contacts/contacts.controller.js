(function() {
  'use strict';

  angular
    .module('app.contacts')
    .controller('ContactsController', ContactsController);

  ContactsController.$inject = ['ContactsService'];

  /* @ngInject */
  function ContactsController(ContactsService) {
    var vm = this;
    vm.contacts = ContactsService.all();
    vm.remove = remove;

    activate();

    ////////////////

    function activate() {
    }

    function remove(event) {
      EventsService.remove(event);
    }
  }
})();