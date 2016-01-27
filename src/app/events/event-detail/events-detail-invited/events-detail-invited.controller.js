(function(){

  angular
    .module('app.events.detail.invited')
    .controller('EventsDetailInvitedController', EventsDetailInvitedController);

  EventsDetailInvitedController.$inject = ['EventsService', '$stateParams', 'ContactsService'];

  /* @ngInject */
  function EventsDetailInvitedController(EventsService, $stateParams, ContactsService) {
    var vm = this;
    vm.invitedStatus = $stateParams.invitedStatus;
    vm.EventsService = EventsService;
    ////////////////
    loadData();


  function loadData(){
    switch(vm.invitedStatus) {
      case 'assisting':
        EventsService.assistingPeople();
          break;
      case 'notAssisting':
        EventsService.notAssistingPeople();
          break;
      default:
        EventsService.pendingPeople();
      }
    }  
  }

})();