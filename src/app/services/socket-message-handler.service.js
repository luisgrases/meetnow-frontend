(function() {
  'use strict';

  angular
    .module('app.services')
    .factory('SocketMessageHandler', SocketMessageHandler);

  SocketMessageHandler.$inject = ['Session', 'EventsService', 'ContactsService', '$rootScope', 'values', '$filter'];

  /* @ngInject */
  function SocketMessageHandler(Session, EventsService, ContactsService, $rootScope, values, $filter) {
    var client = new Faye.Client('http://localhost:9292/faye');
    var subscriptions = [];
    var currentUserSubscription = null;
    subscribeToMyself();

    var _model = {
      subscribeToEvent : subscribeToEvent,
      unsubscribeAllEvents: unsubscribeAllEvents,
      unsubscribeToMyself: unsubscribeToMyself
    };
    return _model;

    ////////////////
    function getEvent(eventId) {
      var eventIndex = EventsService.results.map(function(x) {return x.id; }).indexOf(eventId);
      return EventsService.results[eventIndex];
    }

    function getEventInvitedUser(eventId, userId) {
      var invitedPeople = getEvent(eventId).invited_people;
      var userIndex = invitedPeople.map(function(x) {return x.id; }).indexOf(userId);
      return invitedPeople[userIndex];
    }

    function unsubscribeAllEvents() {
      subscriptions.forEach(function(subscription) {
        subscription.cancel();
      })
    } 

    function unsubscribeToMyself() {
      currentUserSubscription.cancel();

    }

    function subscribeToEvent(event){
      var subscription = client.subscribe("/".concat(event.id), function(data) {
        values.processing = true;
        var event;

        switch(data.message) {

          case 'EVENT_GENERAL_INFO_UPDATED':
            event = getEvent(data.data.id)
            Object.assign(event, data.data);
            console.log('event general info changed')
            break;

          case 'EVENT_CANCELED':
            event = getEvent(data.data)
            event.status = 'canceled';
            break;

          case 'USER_SUBADMIN':
            event = getEvent(data.data.event_id);
            var user = getEventInvitedUser(event.id, data.data.user_id);
            user.privilege = 'subadmin';
            if (Session.current_user.id == user.id) {event.my_privilege = 'subadmin' }
            break;

          case 'USER_NOT_SUBADMIN':
            event = getEvent(data.data.event_id);
            var user = getEventInvitedUser(event.id, data.data.user_id);
            user.privilege = null;
            if (Session.current_user.id == user.id) {event.my_privilege = null }
            break;

          case 'USER_ASSISTING':
            event = getEvent(data.data.event_id);
            var user = getEventInvitedUser(event.id, data.data.user_id);
            user.status = 'assisting';
            event.invited_people_counter = EventsService.invitedPeopleCounter(event.invited_people);
            if (Session.current_user.id == user.id) {event.my_status = 'assisting' }
            break;

          case 'USER_NOT_ASSISTING':
            event = getEvent(data.data.event_id);
            var user = getEventInvitedUser(event.id, data.data.user_id);
            user.status = 'not_assisting';
            event.invited_people_counter = EventsService.invitedPeopleCounter(event.invited_people);
            if (Session.current_user.id == user.id){event.my_status = 'not_assisting' }
            break;

          case 'USER_INVITED':
            event = getEvent(data.data.event_id);
            event.invited_people.push(data.data.user)
            event.invited_people_counter = EventsService.invitedPeopleCounter(event.invited_people);
            var user = getEventInvitedUser(event.id, data.data.user.id);
            var contactIndex = ContactsService.all.map(function(x) {return x.id; }).indexOf(data.data.user.id);
            ContactsService.all[contactIndex].invited = true;
            break;

          case 'USER_LEFT':
            var eventIndex = EventsService.results.map(function(x) {return x.id; }).indexOf(data.data.event_id);
            event = EventsService.results[eventIndex];
            if (data.data.user_id == Session.current_user.id) {
              EventsService.results.splice(eventIndex, 1)
              unsubscribeToEvent(data.data.event_id);
            }else{
              var userIndex = event.invited_people.map(function(x) {return x.id; }).indexOf(data.data.user_id);
              event.invited_people.splice(userIndex, 1)
              event.invited_people_counter = EventsService.invitedPeopleCounter(event.invited_people);
            }
            break;
            
          default:
            console.log('error')
        }
        $rootScope.$apply();
        event.updated_at = new Date().toISOString();
        values.processing = false;
        
      });
      console.log(subscription)
      subscriptions.push(subscription);
    }

    function unsubscribeToEvent(event_id){
      var subscriptionIndex = subscriptions.map(function(x) {return x._channels; }).indexOf("/".concat(event_id));
      var subscription = subscriptions[subscriptionIndex];
      subscription.cancel();
      subscriptions.splice(subscriptionIndex, 1);
      console.log('called unsuscribeToEvent')
    }

    function subscribeToMyself(){
      currentUserSubscription = client.subscribe("/".concat(Session.current_user.id), function(data) {
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
            ContactsService.all.splice(elementPos, 1);
            $rootScope.$apply()
            break;
            
          default:
            console.log('error')
        } 
      });
    }



  }

})();
