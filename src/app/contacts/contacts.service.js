(function() {
  'use strict';

  angular
    .module('app.contacts')
    .factory('ContactsService', contactsService);

  contactsService.$inject = [];

  /* @ngInject */
  function contactsService() {
    var service = {
      all: all,
      get: get
    };
    return service;

    ////////////////

    function all() {
      // Might use a resource here that returns a JSON array
      return contacts;
    };


    function get(eventId) {
      for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].id === parseInt(eventId)) {
          return contacts[i];
        }
      }
      return null;
    }
  }

  // Some fake testing data
  var contacts = [{
      id: 0,
      name: 'Luis Grases',
      username: 'luisgrases'
    }, {
      id: 1,
      name: 'Juan Grases',
      username: 'juangrases'
    }, {
      id: 2,
      name: 'John Hall',
      username: 'johnhall'
    }, {
      id: 3,
      name: 'Mike Won',
      username: 'mikewon'
    }];

})();
