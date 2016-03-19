(function(){

  angular
    .module('app.events.detail.invited')
    .controller('EventsDetailInvitedController', EventsDetailInvitedController);

  EventsDetailInvitedController.$inject = ['EventsService', '$stateParams', 'ContactsService', 'values'];

  /* @ngInject */
  function EventsDetailInvitedController(EventsService, $stateParams, ContactsService, values) {
    var vm = this;
    vm.invitedStatus = $stateParams.invitedStatus;
    vm.EventsService = EventsService;
    vm.values = values;
    vm.isContained = isContained;
    vm.processingButtons = [];
    vm.changeMemberPrivilege = changeMemberPrivilege;
    ////////////////
    

    function changeMemberPrivilege(member) {
      vm.processingButtons.push(member);
      EventsService.changeMemberPrivilege(member).then(function() {
        var index =  vm.processingButtons.indexOf(member);
        console.log(index)
        vm.processingButtons.splice(index, 1);
        console.log(vm.processingButtons);
      });
    }

    function isContained(array, object){
      return (array.indexOf(object) != -1) ? true : false;
    }
  }

})();
