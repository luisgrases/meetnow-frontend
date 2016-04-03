(function() {
  'use strict';

  angular
    .module('app.contacts')
    .controller('ContactsController', ContactsController);

  ContactsController.$inject = ['ContactsService', '$state', '$ionicActionSheet', 'values', '$ionicListDelegate'];

  /* @ngInject */
  function ContactsController(ContactsService, $state, $ionicActionSheet, values, $ionicListDelegate) {
    var vm = this;  
    vm.goToAddContacts = goToAddContacts;
    vm.ContactsService = ContactsService;
    vm.requestRecievedActionSheet = requestRecievedActionSheet;
    vm.removeContact = removeContact;
    vm.values = values;
    vm.processingButtons = [];
    vm.isContained = isContained;

    ////////////////

    function activate() {
    }

    function goToAddContacts(){
      $state.go("tab.contacts.add");
    }

    function acceptContact(contact){
      vm.ContactsService.accept(contact);
    }

    function removeContact(contact){
      vm.processingButtons.push(contact);
      vm.ContactsService.reject(contact).then(function(){
        $ionicListDelegate.closeOptionButtons();

      });
    }

    function isContained(array, object){
      return (array.indexOf(object) != -1) ? true : false;
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