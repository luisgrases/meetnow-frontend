(function() {
  'use strict';

  angular
    .module('app.events.detail')
    .controller('EventsDetailController', EventsDetailController);

  EventsDetailController.$inject = ['EventsService', '$stateParams'];

  /* @ngInject */
  function EventsDetailController(EventsService, $stateParams) {
    var vm = this;
    vm.currentEvent = EventsService.get($stateParams.eventId);



    


    ////////////////
  }
})();
