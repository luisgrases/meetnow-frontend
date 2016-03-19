
(function() {
  'use strict';

  angular
    .module('app.events')
    .controller('EventsController', EventsController);

  EventsController.$inject = ['EventsService', '$state', 'ContactsService', 'Session', 'values', '$ionicListDelegate'];

  /* @ngInject */
  function EventsController(EventsService, $state, ContactsService, Session, values, $ionicListDelegate) {
    var vm = this;
    vm.leave = leave;
    vm.cancel = cancel;
    vm.transition = transition;
    vm.goToDetailed = goToDetailed;
    vm.EventsService = EventsService;
    vm.processingButtons = [];
    vm.values = values;
    vm.isContained = isContained;

    EventsService.all();
    Session.fetch();
    ContactsService.reloadContacts();

    ////////////////
    var d = new Date();
    console.log(d);
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

    function cancel(event) {
      vm.processingButtons.push(event);
      EventsService.cancel(event).then(function(){
        var index =  vm.processingButtons.indexOf(event);
        vm.processingButtons.splice(index, 1);
        $ionicListDelegate.closeOptionButtons();
      });
    }

    function leave(event) {
      vm.processingButtons.push(event);
      EventsService.leave(event).then(function(){
        var index =  vm.processingButtons.indexOf(event);
        vm.processingButtons.splice(index, 1);
        $ionicListDelegate.closeOptionButtons();
      });
    }

    function isContained(array, object){
      return (array.indexOf(object) != -1) ? true : false;
    }
  }
})();