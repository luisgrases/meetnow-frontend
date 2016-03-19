(function() {
  'use strict';

  angular
    .module('app.events.detail.invite')
    .controller('EventsDetailInviteController', EventsDetailInviteController);

  EventsDetailInviteController.$inject = ['$scope','EventsService', '$stateParams', 'ContactsService'];

  /* @ngInject */
  function EventsDetailInviteController($scope, EventsService, $stateParams, ContactsService) {
    var vm = this;
    vm.EventsService = EventsService;
    vm.ContactsService = ContactsService;
    vm.isInvited = isInvited;
    vm.processingButtons = [];
    vm.inviteContact = inviteContact;
    vm.isContained = isContained;

    addInvitedAttribute();

    function inviteContact(contact) {
      vm.processingButtons.push(contact);
      EventsService.inviteContact(contact).then(function() {
        var index =  vm.processingButtons.indexOf(contact);
        vm.processingButtons.splice(index, 1);
      });
    }

    function isContained(array, object){
      return (array.indexOf(object) != -1) ? true : false;
    }

    
    function addInvitedAttribute(){
      var contacts = ContactsService.all;
      for (var i = 0; i < contacts.length; i++) {
         (isInvited(contacts[i])) ? contacts[i].invited = true : contacts[i].invited = false; 
      }
    }


    function isInvited(contact){
      var invitedPeople = EventsService.currentEvent.invited_people;
      for (var i = 0; i < invitedPeople.length; i++) {
         if (contact.id == invitedPeople[i].id) {
          return true;
        }
      }
      return false;
    }


    


    ////////////////
  }
})();