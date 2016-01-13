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
      results: null
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

    function create() {
      $http.post('http://localhost:3000/api/events')
      .then(function(results) {
        console.log(results);
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

  // Some fake testing data
  var events = [{
      id: 0,
      title: 'Event1',
      sizeLimit: 4,
      description: 'Hello world',
      startDate: '2/11/2016',
      location: 'My house',
      lastModified: '1/11/2016',
      invitedBy: 'Luis Grases',
      createdBy: 'Luis Grases',
      canceled: false
    }, {
      id: 1,
      title: 'Event2',
      sizeLimit: 0,
      description: 'Hello world',
      startDate: '2/11/2016',
      location: 'My house',
      lastModified: '1/11/2016',
      invitedBy: 'Luis Grases',
      createdBy: 'Luis Grases',
      canceled: false
    }, {
      id: 2,
      title: 'Event3',
      sizeLimit: 10,
      description: 'Hello world',
      startDate: '2/11/2016',
      location: 'My house',
      lastModified: '1/11/2016',
      invitedBy: 'Luis Grases',
      createdBy: 'Luis Grases',
      canceled: false
    }, {
      id: 3,
      title: 'Event4',
      sizeLimit: 2,
      description: 'Hello world',
      startDate: '2/11/2016',
      location: 'My house',
      lastModified: '1/11/2016',
      invitedBy: 'Luis Grases',
      createdBy: 'Luis Grases',
      canceled: false
    }, {
      id: 4,
      title: 'Event5',
      sizeLimit: 20,
      description: 'Hello world',
      startDate: '2/11/2016',
      location: 'My house',
      lastModified: '1/11/2016',
      invitedBy: 'Luis Grases',
      createdBy: 'Luis Grases',
      canceled: false
  }];

})();
