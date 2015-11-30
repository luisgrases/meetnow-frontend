(function() {
  'use strict';

  angular
    .module('app.events')
    .controller('EventsCreateController', EventsCreateController);

  EventsCreateController.$inject = ['EventsService'];

  /* @ngInject */
  function EventsCreateController(EventsService) {
    var vm = this;
    vm.create = create;

    activate();

    ////////////////

    function activate() {
    }

    function create(event) {

    }
  }
})();