(function() {
  'use strict';

  angular
    .module('app.events.create')
    .controller('EventsCreateController', EventsCreateController);

  EventsCreateController.$inject = ['EventsService', '$state', '$ionicHistory'];

  /* @ngInject */
  function EventsCreateController(EventsService, $state, $ionicHistory) {
    var vm = this;
    vm.goToInvitePeopleView = goToInvitePeopleView;
    vm.create = create;
    vm.EventsService = EventsService;
    vm.create = create;
    vm.increaseAssistLimit = increaseAssistLimit;
    vm.decreaseAssistLimit = decreaseAssistLimit;
    activate();
    ////////////////

    function activate() {
    }



    function goToInvitePeopleView(){
      $state.go("tab.events.invite");
    };

    function create(event) {
      EventsService.create(event);
      $ionicHistory.goBack();
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
