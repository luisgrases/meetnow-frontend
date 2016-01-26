(function() {
  'use strict';

  angular
    .module('app.events')
    .factory('EventsService', eventsService);

  eventsService.$inject = ['$http'];

  /* @ngInject */
  function eventsService($http) {
    var _model = {
      all: all,
      remove: remove,
      create: create,
      get: get,
      assistingPeople: assistingPeople,
      notAssistingPeople: notAssistingPeople,
      pendingPeople: pendingPeople,
      results: null,
      currentEvent: {
        invited_people: {
          assisting: null,
          not_assisting: null,
          pending: null
        }
      },
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
      });
    }

    function invitedPeopleCounter() {
      $http.get('http://localhost:3000/api/events/' + _model.currentEvent.id + '/invited_contacts_counter')
      .then(function(results) {
        _model.currentEvent.invited_people_counter = results.data;
      });
    }

    function assistingPeople(){
      $http.get('http://localhost:3000/api/events/' + _model.currentEvent.id + '/assisting_people')
      .then(function(results) {
        _model.currentEvent.invited_people.assisting = results.data;
      });
    }

    function notAssistingPeople(){
      $http.get('http://localhost:3000/api/events/' + _model.currentEvent.id + '/not_assisting_people')
      .then(function(results) {
        _model.currentEvent.invited_people.not_assisting = results.data;
      });
    }

    function pendingPeople(){
      $http.get('http://localhost:3000/api/events/' + _model.currentEvent.id + '/pending_people')
      .then(function(results) {
        _model.currentEvent.invited_people.pending = results.data;
      });
    }

    function remove(event) {
      events.splice(events.indexOf(event), 1);
    }

    function get(eventId) {
      for (var i = 0; i < _model.results.length; i++) {
        if (_model.results[i].id === parseInt(eventId)) {
          _model.currentEvent = _model.results[i];
          invitedPeopleCounter();
        }
      }
      return null;
    }
  }

})();
