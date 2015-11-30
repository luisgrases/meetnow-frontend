(function() {
  'use strict';

  angular
    .module('app.events')
    .controller('EventsController', EventsController);

  EventsController.$inject = ['EventsService'];

  /* @ngInject */
  function EventsController(EventsService) {
    var vm = this;
    vm.events = EventsService.all();
    vm.remove = remove;

    activate();

    ////////////////

    function activate() {
    }

    function remove(event) {
      EventsService.remove(event);
    }
  }
})();