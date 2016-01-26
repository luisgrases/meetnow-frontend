(function() {
  'use strict';

  angular
    .module('app.events.detail')
    .controller('EventsDetailController', EventsDetailController);

  EventsDetailController.$inject = ['EventsService', '$stateParams', '$state'];

  /* @ngInject */
  function EventsDetailController(EventsService, $stateParams, $state) {
    var vm = this;
    vm.goToEdit = goToEdit;
    vm.goToInvite = goToInvite;
    vm.goToInvited = goToInvited;
    vm.EventsService = EventsService;
    ////////////////
    EventsService.get($stateParams.eventId);

    function goToEdit(){
      $state.go("tab.events.edit", {eventId: EventsService.currentEvent.id});
    }

    function goToInvite(){
      $state.go("tab.events.extrainvite", {eventId: EventsService.currentEvent.id});
    }

    function goToInvited(status){
      $state.go("tab.events.invited", {eventId: EventsService.currentEvent.id, invitedStatus: status });
    }

  }
})();
