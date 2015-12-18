(function() {
  'use strict';

  angular
    .module('app.events')
    .controller('EventsController', EventsController);

  EventsController.$inject = ['EventsService', '$state'];

  /* @ngInject */
  function EventsController(EventsService, $state) {
    var vm = this;
    vm.events = EventsService.all();
    vm.remove = remove;
    vm.transition = transition;
    vm.goToDetailed = goToDetailed;

    activate();

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