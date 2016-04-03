(function() {
  'use strict';

  angular
    .module('app.contacts')
    .factory('ContactsService', contactsService);

  contactsService.$inject = ['$http', 'values', 'ErrorMessage'];

  /* @ngInject */
  function contactsService($http, values, ErrorMessage) {
    var _model = {
      accept: accept,
      reject: reject,
      addContact: addContact,
      search: search,
      reloadContacts: reloadContacts,
      requestsSentResults: null,
      requestsRecievedResults: null,
      searchResults: null,
      all: null

    };
    return _model;

    ////////////////

    function reloadContacts(){
      all();
    }



    function all() {
      values.processing = true;
      $http.get('http://localhost:3000/api/friendships/all')
      .then(function(results) {
        values.processing = false;
        console.log(results.data);
        _model.all = results.data;
      }, function(error){
        values.processing = false;
        ErrorMessage.showAlert(error.data);
      });
    };

    function addContact(contact){
      values.processing = true;
      return $http.post('http://localhost:3000/api/friendships', contact)
      .then(function(results) {
        values.processing = false;
        _model.all.push(results.data);
        var elementPos = _model.searchResults.map(function(x) {return x.id; }).indexOf(results.data.id);
        _model.searchResults.splice(elementPos, 1);
      }, function(error){
        values.processing = false;
        ErrorMessage.showAlert(error.data);
      });
    }

    function search(searchTerm) {
      values.processing = true;
      $http.get('http://localhost:3000/api/users/search?searchTerm=' + searchTerm)
      .then(function(results) {
        values.processing = false;
        console.log(results.data);
        _model.searchResults = results.data;
      }, function(error){
        values.processing = false;
        ErrorMessage.showAlert(error.data);
      });
    }

    function accept(contact) {
      values.processing = true;
      console.log(contact)
      $http.post('http://localhost:3000/api/friendships/accept', contact)
      .then(function(results) {
        values.processing = false;
        contact.accepted = true;
      }, function(error){
        values.processing = false;
        ErrorMessage.showAlert(error.data);
      });
    }
    function reject(contact) {
      values.processing = true;
      return $http.delete('http://localhost:3000/api/friendships/' + contact.id)
      .then(function(results) {
        values.processing = false;
        var index =  _model.all.indexOf(contact);
        _model.all.splice(index, 1);
        console.log(results);
      }, function(error){
        values.processing = false;
        ErrorMessage.showAlert(error.data);
      });
    }

  }

})();
