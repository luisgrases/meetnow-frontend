(function() {
  'use strict';

  angular
    .module('app.events.create')
    .controller('EventsCreateController', EventsCreateController);

  EventsCreateController.$inject = ['EventsService', '$state'];

  /* @ngInject */
  function EventsCreateController(EventsService, $state) {
    var vm = this;
    vm.goToInvitePeopleView = goToInvitePeopleView;
    vm.create = create;
    vm.EventsService = EventsService;
    vm.create = create;

    activate();

    ////////////////

    function activate() {
    }



    function goToInvitePeopleView(){
      $state.go("tab.events.invite");
    };

    function create(event) {
      EventsService.create(event);
      EventsService.all;
    }

  }
})();
