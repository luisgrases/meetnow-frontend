(function() {
  'use strict';

  angular
    .module('app.events.create')
    .controller('EventsCreateController', EventsCreateController);

  EventsCreateController.$inject = ['EventsService'];

  /* @ngInject */
  function EventsCreateController(EventsService) {
    var vm = this;
    vm.goToInvitePeopleView = goToInvitePeopleView;
    vm.create = create;
    vm.newEvent = {
      assistLimit: 0
    };

    vm.create = create;

    activate();

    ////////////////

    function activate() {
    }

    function goToInvitePeopleView(){
      $state.go("tab.events.create.invite");
    };

    function create(event) {
      EventsService.create(event);
    }

  }
})();
