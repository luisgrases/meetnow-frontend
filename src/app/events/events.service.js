(function() {
  'use strict';

  angular
    .module('app.events')
    .factory('EventsService', eventsService);

  eventsService.$inject = ['$http', 'ErrorMessage'];

  /* @ngInject */
  function eventsService($http, ErrorMessage) {
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
      newEvent: {
        assist_limit: 0,
        users: []
      },
    };
    return _model;

    ////////////////

    function all() {
      $http.get('http://localhost:3000/api/events')
      .then(function(results){
        console.log(results.data);
        _model.results = results.data;
      });
    };

    function create(event) {
      $http.post('http://localhost:3000/api/events', event)
      .then(function(results) {
        console.log(results);
      },function(error){
        console.log(error);
        ErrorMessage.showAlert(error.data);
      });
    }

    function update(event) {
      $http.patch('http://localhost:3000/api/events/' + _model.currentEvent.id, event)
      .then(function(results) {
        console.log(results);
      },function(error){
        console.log(error);
        ErrorMessage.showAlert(error.data);
      });
    }      

    function details() {
      return $http.get('http://localhost:3000/api/events/' + _model.currentEvent.id)
      .then(function(results) {
        _model.currentEvent.invited_people_counter = results.data['invited_people_counter'];
        _model.currentEvent.admin = results.data['admin']['uid'];
        _model.currentEvent.invited_people = results.data['invited_people'];
        console.log(_model.currentEvent.invited_people);
      });
    }

    function cancel(event) {
      $http.post('http://localhost:3000/api/events/' + event.id + '/cancel')
      .then(function(results) {
        console.log(results);
      });
    }

    function leave(event) {
      $http.post('http://localhost:3000/api/events/' + event.id + '/leave')
      .then(function(results) {
        console.log(results);
      });
    }

    function get(eventId) {
      for (var i = 0; i < _model.results.length; i++) {
        if (_model.results[i].id === parseInt(eventId)) {
          _model.currentEvent = _model.results[i];
          return details();
        }
      }
      return null;
    }

    function assist() {
      $http.post('http://localhost:3000/api/events/' + _model.currentEvent.id + '/assist')
      .then(function(results) {
        console.log(results);
      }, function(error){
        console.log(error);
        ErrorMessage.showAlert(error.data);
      });
    }

    function notAssist() {
      $http.post('http://localhost:3000/api/events/' + _model.currentEvent.id + '/not_assist')
      .then(function(results) {
        console.log(results);
      });
    }

    function changeMemberPrivilege(user) {
      $http.post('http://localhost:3000/api/events/' + _model.currentEvent.id + '/change_member_privilege', {user_id : user.id})
      .then(function(results) {
        console.log(results);
      });
    }

    function inviteContact(contact) {
      $http.post('http://localhost:3000/api/events/' + _model.currentEvent.id + '/invite_contact', {user_id : contact.id})
      .then(function(results) {
        console.log(results);
      });
    }

  }

})();
