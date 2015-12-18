(function(){

  angular
    .module('app.events.detail.invited')
    .controller('EventsDetailInvitedController', EventsDetailInvitedController);

  EventsDetailInvitedController.$inject = ['EventsService', '$stateParams', 'ContactsService'];

  /* @ngInject */
  function EventsDetailInvitedController(EventsService, $stateParams, ContactsService) {
    var vm = this;
    vm.currentEvent = EventsService.get($stateParams.eventId);
    vm.invitedStatus = $stateParams.invitedStatus;
    ////////////////
  }

})();