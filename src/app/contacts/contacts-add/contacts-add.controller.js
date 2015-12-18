(function() {
  'use strict';

  angular
    .module('app.contacts.add')
    .controller('ContactsAddController', ContactsAddController);

  ContactsAddController.$inject = ['ContactsService'];

  /* @ngInject */
  function ContactsAddController(ContactsService) {
    var vm = this;
    ////////////////
  }
})();