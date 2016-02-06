(function() {
  'use strict';

  angular
    .module('app.events.detail.description')
    .controller('EventsDetailDescriptionController', EventsDetailDescriptionController);

  EventsDetailDescriptionController.$inject = ['EventsService'];

  /* @ngInject */
  function EventsDetailDescriptionController(EventsService) {
    var vm = this;
    vm.EventsService = EventsService;


    


    ////////////////
  }
})();
