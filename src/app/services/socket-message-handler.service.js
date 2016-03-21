(function() {
  'use strict';

  angular
    .module('app.services')
    .factory('SocketMessageHandler', SocketMessageHandler);

  SocketMessageHandler.$inject = ['Session', 'EventsService', 'ContactsService', '$rootScope'];

  /* @ngInject */
  function SocketMessageHandler(Session, EventsService, ContactsService, $rootScope) {
    var client = new Faye.Client('http://localhost:9292/faye');
    subscribeToMyself();

    var _model = {
      subscribeToEvent : subscribeToEvent
    };
    return _model;

    ////////////////

    function subscribeToEvent(event){
      client.subscribe("/".concat(event.id), function(data) {
        switch(data.message) {

          case 'EVENT_GENERAL_INFO_UPDATED':
            var elementPos = EventsService.results.map(function(x) {return x.id; }).indexOf(data.data.id);
            var objectFound = EventsService.results[elementPos];
            Object.assign(EventsService.results[elementPos], data.data);
            $rootScope.$apply();
            break;

          case 'EVENT_CANCELED':
            var elementPos = EventsService.results.map(function(x) {return x.id; }).indexOf(data.data);
            EventsService.results[elementPos].status = 'canceled';
            $rootScope.$apply();
            break;

          case 'USER_SUBADMIN':
            var elementPos = EventsService.results.map(function(x) {return x.id; }).indexOf(data.data.event_id);
            var invitedPeople = EventsService.results[elementPos].invited_people;
            var userPosition = invitedPeople.map(function(x) {return x.id; }).indexOf(data.data.user_id);
            invitedPeople[userPosition].privilege = 'subadmin';
            if (Session.current_user.id == data.data.user_id) {EventsService.results[elementPos].my_privilege = 'subadmin' }
            $rootScope.$apply();
            break;

          case 'USER_NOT_SUBADMIN':
            var elementPos = EventsService.results.map(function(x) {return x.id; }).indexOf(data.data.event_id);
            var invitedPeople = EventsService.results[elementPos].invited_people;
            var userPosition = invitedPeople.map(function(x) {return x.id; }).indexOf(data.data.user_id);
            invitedPeople[userPosition].privilege = null;
            if (Session.current_user.id == data.data.user_id) {EventsService.results[elementPos].my_privilege = null }
            $rootScope.$apply();
            break;

          case 'USER_ASSISTING':
            var elementPos = EventsService.results.map(function(x) {return x.id; }).indexOf(data.data.event_id);
            var invitedPeople = EventsService.results[elementPos].invited_people;
            var userPosition = invitedPeople.map(function(x) {return x.id; }).indexOf(data.data.user_id);
            invitedPeople[userPosition].status = 'assisting';
            EventsService.results[elementPos].invited_people_counter = EventsService.invitedPeopleCounter(invitedPeople);
            if (Session.current_user.id == data.data.user_id) {EventsService.results[elementPos].my_status = 'assisting' }
            $rootScope.$apply();
            break;

          case 'USER_NOT_ASSISTING':
            var elementPos = EventsService.results.map(function(x) {return x.id; }).indexOf(data.data.event_id);
            var invitedPeople = EventsService.results[elementPos].invited_people;
            var userPosition = invitedPeople.map(function(x) {return x.id; }).indexOf(data.data.user_id);
            invitedPeople[userPosition].status = 'not_assisting';
            EventsService.results[elementPos].invited_people_counter = EventsService.invitedPeopleCounter(invitedPeople);
            if (Session.current_user.id == data.data.user_id){EventsService.results[elementPos].my_status = 'not_assisting' }
            $rootScope.$apply();
            break;

          case 'USER_INVITED':
            var elementPos = EventsService.results.map(function(x) {return x.id; }).indexOf(data.data.event_id);
            var objectFound = EventsService.results[elementPos];
            EventsService.results[elementPos].invited_people.push(data.data.user)
            EventsService.results[elementPos].invited_people_counter = EventsService.invitedPeopleCounter(EventsService.results[elementPos].invited_people);
            var contactIndex = ContactsService.all.map(function(x) {return x.id; }).indexOf(data.data.user.id);
            ContactsService.all[contactIndex].invited = true;
            $rootScope.$apply();
            break;

          case 'USER_LEFT':
            var eventIndex = EventsService.results.map(function(x) {return x.id; }).indexOf(data.data.event_id);
            if (data.data.user_id == Session.current_user.id) {
              EventsService.results.splice(eventIndex, 1)
            }else{
              var event = EventsService.results[eventIndex];
              var userIndex = event.invited_people.map(function(x) {return x.id; }).indexOf(data.data.user_id);
              event.invited_people.splice(userIndex, 1)
              event.invited_people_counter = EventsService.invitedPeopleCounter(event.invited_people);
            }
            $rootScope.$apply();
            break;
            
          default:
            console.log('error')
        } 
      });
    }

    function unsuscribeToEvent(event){

    }

    function subscribeToMyself(){
      client.subscribe("/".concat(Session.current_user.id), function(data) {
        switch(data.message) {

          case 'EVENT_INVITATION':
            EventsService.results.push(data.data.event);
            subscribeToEvent(data.data.event);
            $rootScope.$apply();
            break;
          case 'FRIEND_REQUEST_RECIEVED':
            ContactsService.all.push(data.data);
            $rootScope.$apply();
            break;
          case 'FRIEND_REQUEST_ACCEPTED':
            var elementPos = ContactsService.all.map(function(x) {return x.id; }).indexOf(data.data);
            ContactsService.all[elementPos].accepted = true;
            $rootScope.$apply();
            break;
          case 'FRIENDSHIP_REMOVED':
            var elementPos = ContactsService.all.map(function(x) {return x.id; }).indexOf(data.data);
            var objectFound = ContactsService.all.splice(elementPos, 1);
            $rootScope.$apply()
            break;
            
          default:
            console.log('error')
        } 
      });
    }



  }

})();
