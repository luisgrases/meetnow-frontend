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
      invitedPeopleCounter : invitedPeopleCounter,
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
      });
    }

    function invitedPeopleCounter(event) {
      $http.get('http://localhost:3000/api/events/' + event.id + '/invited_contacts_counter')
      .then(function(results) {
        console.log(results.data);
      });
    }

    function remove(event) {
      events.splice(events.indexOf(event), 1);
    }

    function get(eventId) {
      for (var i = 0; i < _model.results.length; i++) {
        if (_model.results[i].id === parseInt(eventId)) {
          return _model.results[i];
        }
      }
      return null;
    }
  }



})();
