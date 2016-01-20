(function() {
  'use strict';

  angular
    .module('app.contacts')
    .factory('ContactsService', contactsService);

  contactsService.$inject = ['$http'];

  /* @ngInject */
  function contactsService($http) {
    var _model = {
      accept: accept,
      reject: reject,
      addContact: addContact,
      search: search,
      reloadContacts: reloadContacts,
      acceptedResults: null,
      requestsSentResults: null,
      requestsRecievedResults: null,
      searchResults: null
    };
    return _model;

    ////////////////

    function reloadContacts(){
      accepted();
      requestsSent();
      requestsRecieved();
    }

    function accepted() {
      $http.get('http://localhost:3000/api/friendships/accepted')
      .then(function(results) {
        console.log(results.data);
        _model.acceptedResults = results.data;
      });
    };

    function requestsSent() {
      $http.get('http://localhost:3000/api/friendships/requests_sent')
      .then(function(results) {
        console.log(results.data);
        _model.requestsSentResults = results.data;
      });
    };

    function requestsRecieved() {
      $http.get('http://localhost:3000/api/friendships/requests_recieved')
      .then(function(results) {
        console.log(results.data);
        _model.requestsRecievedResults = results.data;
      });
    };

    function addContact(contact){
      $http.post('http://localhost:3000/api/friendships', contact)
      .then(function(results) {
        console.log(results);
      });
    }

    function search(searchTerm) {
      $http.get('http://localhost:3000/api/users/search?searchTerm=' + searchTerm)
      .then(function(results) {
        console.log(results.data);
        _model.searchResults = results.data;
      });
    }

    function remove() {}
    function accept(contact) {
      $http.post('http://localhost:3000/api/friendships/accept', contact)
      .then(function(results) {
        console.log(results);
      });
    }
    function reject(contact) {
      $http.delete('http://localhost:3000/api/friendships/' + contact.id)
      .then(function(results) {
        console.log(results);
      });
    }

  }

})();
