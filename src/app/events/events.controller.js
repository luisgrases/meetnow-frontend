(function() {
  'use strict';

  angular
    .module('app.events')
    .controller('EventsController', EventsController);

  EventsController.$inject = ['EventsService', '$state'];

  /* @ngInject */
  function EventsController(EventsService, $state) {
    var vm = this;
    vm.remove = remove;
    vm.transition = transition;
    vm.goToDetailed = goToDetailed;
    vm.EventsService = EventsService;

    activate();
    vm.EventsService.all();

    ////////////////

    function activate() {
    }

    function transition(){
      $state.go("tab.events.create");
    };

    function goToDetailed(event){
      $state.go("tab.events.detail", {eventId: event.id});
    };

    function remove(event) {
      EventsService.remove(event);
    }
  }
})();