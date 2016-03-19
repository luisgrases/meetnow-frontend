(function() {
  'use strict';

  angular
    .module('app.events.create')
    .controller('EventsCreateController', EventsCreateController);

  EventsCreateController.$inject = ['EventsService', '$state', '$ionicHistory', 'ContactsService', 'values'];

  /* @ngInject */
  function EventsCreateController(EventsService, $state, $ionicHistory, ContactsService, values) {
    var vm = this;
    vm.goToInvitePeopleView = goToInvitePeopleView;
    vm.create = create;
    vm.EventsService = EventsService;
    vm.create = create;
    vm.increaseAssistLimit = increaseAssistLimit;
    vm.decreaseAssistLimit = decreaseAssistLimit;
    vm.values = values;
    activate();

    ////////////////

    function activate() {
      emptyNewEvent();
      unhideAllContacts();
    }

    function emptyNewEvent() {
      EventsService.newEvent = {
        assist_limit: 0,
        users: []
      };
    }

    function unhideAllContacts(){
      angular.forEach(ContactsService.all, function(contact){
        contact.hide = false;
      })
    }



    function goToInvitePeopleView(){
      $state.go("tab.events.invite");
    };

    function create(event) {
      EventsService.create(event).then(function(passed){
        if (passed) { $ionicHistory.goBack(); }
      });
    }

    function increaseAssistLimit(){
      if (EventsService.newEvent.assist_limit < 200) {
       EventsService.newEvent.assist_limit += 1;
      }
    }

    function decreaseAssistLimit(){
      if (EventsService.newEvent.assist_limit > 0) { 
        EventsService.newEvent.assist_limit -= 1;
      }
    }

  }
})();
