(function() {
  'use strict';

  angular
    .module('app.events')
    .factory('EventsService', eventsService);

  eventsService.$inject = ['$http', 'ErrorMessage', 'values'];

  /* @ngInject */
  function eventsService($http, ErrorMessage, values) {
    var _model = {
      all: all,
      create: create,
      update: update,
      get: get,
      cancel: cancel,
      leave: leave,
      assist: assist,
      notAssist: notAssist,
      changeMemberPrivilege: changeMemberPrivilege,
      inviteContact: inviteContact,
      results: null,
      currentEvent: null,
      invitedPeopleCounter: invitedPeopleCounter,
      newEvent: {
        assist_limit: 0,
        users: []
      },
    };
    return _model;

    ////////////////

    function invitedPeopleCounter(invitedPeople){
      var result = invitedPeople.reduce(function(object, element){
        console.log(object, 'asdfesf')
        switch(element.status) {

          case 'assisting':
            object.assisting ++;
            break;

          case 'not_assisting':
            object.not_assisting ++;
            break;

          case 'pending':
            object.pending ++;
            break;
          
          default:
        }
        return object

      },{assisting: 0, not_assisting: 0, pending: 0 });
      console.log(result);
      return result;
    }

    function all() {
      values.processing = true;
      return $http.get('http://localhost:3000/api/events')
      .then(function(results){
        values.processing = false;
        _model.results = results.data;
         console.log(results.data)
      }, function(error){
        values.processing = false;
        ErrorMessage.showAlert(error.data);
      });
    };

    function create(event) {
      values.processing = true;
      return $http.post('http://localhost:3000/api/events', event)
      .then(function(results) {
        values.processing = false;
        return true;
      },function(error){
        ErrorMessage.showAlert(error.data);
        values.processing = false;
        return false;
      });
    }

    function update(event) {
      values.processing = true;
      return $http.patch('http://localhost:3000/api/events/' + _model.currentEvent.id, event)
      .then(function(results) {
        values.processing = false;
        console.log(results);
        return true;
      },function(error){
        values.processing = false;
        console.log(error);
        ErrorMessage.showAlert(error.data);
        return false;
      });
    }      

    function details() {
      values.processing = true;
      return $http.get('http://localhost:3000/api/events/' + _model.currentEvent.id)
      .then(function(results) {
        values.processing = false;
        _model.currentEvent.invited_people_counter = results.data['invited_people_counter'];
        _model.currentEvent.admin = results.data['admin']['uid'];
        _model.currentEvent.invited_people = results.data['invited_people'];
        console.log(_model.currentEvent.invited_people);
      }, function(error){
        values.processing = false;
        ErrorMessage.showAlert(error.data);
      });
    }

    function cancel(event) {
      values.processing = true;
      return $http.post('http://localhost:3000/api/events/' + event.id + '/cancel')
      .then(function(results) {
        values.processing = false;
        console.log(results);
      }, function(error){
        values.processing = false;
        ErrorMessage.showAlert(error.data);
      });
    }

    function leave(event) {
      values.processing = true;
      return $http.post('http://localhost:3000/api/events/' + event.id + '/leave')
      .then(function(results) {
        values.processing = false;
        console.log(results);
      }, function(error){
        values.processing = false;
        ErrorMessage.showAlert(error.data);
      });
    }

    function get(eventId) {
      for (var i = 0; i < _model.results.length; i++) {
        if (_model.results[i].id === parseInt(eventId)) {
          _model.currentEvent = _model.results[i];
        }
      }
      return null;
    }

    function assist() {
      values.processing = true;
      $http.post('http://localhost:3000/api/events/' + _model.currentEvent.id + '/assist')
      .then(function(results) {
        values.processing = false;
      }, function(error){
        values.processing = false;
        ErrorMessage.showAlert(error.data);
      });
    }

    function notAssist() {
      values.processing = true;
      $http.post('http://localhost:3000/api/events/' + _model.currentEvent.id + '/not_assist')
      .then(function(results) {
        values.processing = false;
      }, function(error){
        values.processing = false;
      });
    }

    function changeMemberPrivilege(user) {
      values.processing = true;
      return $http.post('http://localhost:3000/api/events/' + _model.currentEvent.id + '/change_member_privilege', {user_id : user.id})
      .then(function(results) {
        console.log(results);
        values.processing = false;
      }, function(error){
        values.processing = false;
        ErrorMessage.showAlert(error.data);
      });
    }

    function inviteContact(contact) {
      values.processing = true;
      return $http.post('http://localhost:3000/api/events/' + _model.currentEvent.id + '/invite_contact', {user_id : contact.id})
      .then(function(results) {
        values.processing = false;
        console.log(results);
      }, function(error){
        values.processing = false;
        ErrorMessage.showAlert(error.data);
      });
    }

  }

})();
