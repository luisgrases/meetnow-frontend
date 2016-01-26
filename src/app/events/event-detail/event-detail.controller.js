(function() {
  'use strict';

  angular
    .module('app.events.detail')
    .controller('EventsDetailController', EventsDetailController);

  EventsDetailController.$inject = ['EventsService', '$stateParams', '$state'];

  /* @ngInject */
  function EventsDetailController(EventsService, $stateParams, $state) {
    var vm = this;
    vm.currentEvent = EventsService.get($stateParams.eventId);
    vm.goToEdit = goToEdit;
    vm.goToInvite = goToInvite;
    vm.goToInvited = goToInvited;
    ////////////////
    EventsService.invitedPeopleCounter(vm.currentEvent);

    function goToEdit(){
      $state.go("tab.events.edit", {eventId: vm.currentEvent.id});
    }

    function goToInvite(){
      $state.go("tab.events.extrainvite", {eventId: vm.currentEvent.id});
    }

    function goToInvited(status){
      $state.go("tab.events.invited", {eventId: vm.currentEvent.id, invitedStatus: status });
    }

  }
})();
