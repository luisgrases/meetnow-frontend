
(function() {
  'use strict';

  angular
    .module('app.events')
    .controller('EventsController', EventsController);

  EventsController.$inject = ['EventsService', '$state', 'ContactsService'];

  /* @ngInject */
  function EventsController(EventsService, $state, ContactsService) {
    var vm = this;
    vm.remove = remove;
    vm.transition = transition;
    vm.goToDetailed = goToDetailed;
    vm.EventsService = EventsService;

    vm.EventsService.all();
    ContactsService.reloadContacts();

    ////////////////
    console.log('cargo el event controller');
    var client = new Faye.Client('http://localhost:9292/faye');

    client.subscribe("/current_user/events", function(data) {
      EventsService.results.push(data.event);
      
    });

    client.subscribe("current_user/friendship/accepted", function(data) {
      ContactsService.all.push(data.contacts);
    });


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