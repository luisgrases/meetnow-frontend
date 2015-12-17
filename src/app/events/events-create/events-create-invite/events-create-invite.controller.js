(function() {
  'use strict';

  angular
    .module('app.events.create.invite')
    .controller('EventsCreateInviteController', EventsCreateInviteController);

  EventsCreateInviteController.$inject = ['EventsService'];

  /* @ngInject */
  function EventsCreateInviteController(EventsService) {
    var vm = this;


    activate();

    ////////////////

    function activate() {
    }


  }
})();
