(function() {
  'use strict';

  angular
    .module('app.events.detail.edit')
    .controller('EventsDetailEditController', EventsDetailEditController);

  EventsDetailEditController.$inject = ['EventsService', '$stateParams'];

  /* @ngInject */
  function EventsDetailEditController(EventsService, $stateParams) {
    var vm = this;
    vm.EventsService = EventsService;
    vm.editingEvent = angular.copy(EventsService.currentEvent);
    vm.increaseAssistLimit = increaseAssistLimit;
    vm.decreaseAssistLimit = decreaseAssistLimit;

    function increaseAssistLimit(){
      if (vm.editingEvent.assist_limit < 200) {
       vm.editingEvent.assist_limit += 1;
      }
    }

    function decreaseAssistLimit(){
      if (vm.editingEvent.assist_limit > 0 && vm.editingEvent.assist_limit > assistingPeople.length) { 
        vm.editingEvent.assist_limit -= 1;
      }
    }

    function assistingPeople(){
      result = [];
      assist_limit.forEach(EventsService.currentEvent.invited_people, function(invited){
        if (invited.status == 'assisting'){
          result.push(invited)
        }
        
      })
      console.log(result);
      return result
    }




    


    ////////////////
  }
})();
