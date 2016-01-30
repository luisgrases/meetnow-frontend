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

    addInvitedAttribute();

    
    function addInvitedAttribute(){
      var contacts = ContactsService.acceptedResults;
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