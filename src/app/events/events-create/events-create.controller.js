(function() {
  'use strict';

  angular
    .module('app.events.create')
    .controller('EventsCreateController', EventsCreateController);

  EventsCreateController.$inject = ['EventsService'];

  /* @ngInject */
  function EventsCreateController(EventsService) {
    var vm = this;
    vm.create = create;
    vm.newEvent = {
      assistLimit: 0
    };

    vm.create = create;

    activate();

    ////////////////

    function activate() {
    }

    function create(event) {
      EventsService.create(event);
    }

  }
})();
