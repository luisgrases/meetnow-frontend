(function() {
  'use strict';

  angular
    .module('app.events.detail.edit')
    .controller('EventsDetailEditController', EventsDetailEditController);

  EventsDetailEditController.$inject = ['EventsService', '$stateParams'];

  /* @ngInject */
  function EventsDetailEditController(EventsService, $stateParams) {
    var vm = this;
    vm.currentEvent = EventsService.get($stateParams.eventId);



    


    ////////////////
  }
})();
