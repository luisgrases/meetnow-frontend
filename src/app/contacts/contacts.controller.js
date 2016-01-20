(function() {
  'use strict';

  angular
    .module('app.contacts')
    .controller('ContactsController', ContactsController);

  ContactsController.$inject = ['ContactsService', '$state', '$ionicActionSheet'];

  /* @ngInject */
  function ContactsController(ContactsService, $state, $ionicActionSheet) {
    var vm = this;  
    vm.goToAddContacts = goToAddContacts;
    vm.ContactsService = ContactsService;
    vm.requestRecievedActionSheet = requestRecievedActionSheet;
    vm.removeContact = removeContact;
    ContactsService.reloadContacts();

    ////////////////

    function activate() {
    }

    function goToAddContacts(){
      $state.go("tab.contacts.add");
    }

    function acceptContact(contact){
      vm.ContactsService.accept(contact);
      ContactsService.reloadContacts();
    }

    function removeContact(contact){
      vm.ContactsService.reject(contact);
      ContactsService.reloadContacts();
    }

    function requestRecievedActionSheet(contact){
    $ionicActionSheet.show({
     buttons: [
       { text: 'Accept Request' }
     ],
     destructiveText: 'Reject Request',
     titleText: 'Friend Request',
     cancelText: 'Cancel',
     cancel: function() {
          // add cancel code..
        },
    destructiveButtonClicked: function() {
      removeContact(contact);
      return true
    },
     buttonClicked: function() {
       acceptContact(contact);
       return true
     }
   });
   }



  }
})();