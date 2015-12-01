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

    activate();

    ////////////////

    function activate() {
    }

    function transition(){
      $state.go("tab.events.create");
    };

    function remove(event) {
      EventsService.remove(event);
    }
  }
})();