(function() {
  'use strict';

  angular
    .module('app.events')
    .factory('EventsService', eventsService);

  eventsService.$inject = [];

  /* @ngInject */
  function eventsService() {
    var service = {
      all: all,
      remove: remove,
      create: create,
      get: get
    };
    return service;

    ////////////////

    function all() {
      // Might use a resource here that returns a JSON array
      return events;
    }

    function create(event) {
      events.push(event);
    }

    function remove(event) {
      events.splice(events.indexOf(event), 1);
    }

    function get(eventId) {
      for (var i = 0; i < events.length; i++) {
        if (events[i].id === parseInt(eventId)) {
          return events[i];
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
