
(function() {
  'use strict';

  angular
    .module('app.events')
    .controller('EventsController', EventsController);

  EventsController.$inject = ['EventsService', '$state', 'ContactsService', 'Session', 'values', '$ionicListDelegate', 'SocketMessageHandler'];

  /* @ngInject */
  function EventsController(EventsService, $state, ContactsService, Session, values, $ionicListDelegate, SocketMessageHandler) {
    var vm = this;
    vm.leave = leave;
    vm.cancel = cancel;
    vm.transition = transition;
    vm.goToDetailed = goToDetailed;
    vm.EventsService = EventsService;
    vm.processingButtons = [];
    vm.values = values;
    vm.isContained = isContained;

    EventsService.all().then(function(){
      EventsService.results.forEach(function(event){
          SocketMessageHandler.subscribeToEvent(event);
        })
    });
    
    ContactsService.reloadContacts();

    ////////////////


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