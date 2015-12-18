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
    ////////////////

    function goToEdit(){
      $state.go("tab.events.edit", {eventId: vm.currentEvent.id});
    }

    function goToInvite(){
      $state.go("tab.events.extrainvite", {eventId: vm.currentEvent.id});

    }
  }
})();
