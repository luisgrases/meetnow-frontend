(function() {
  'use strict';

  angular
    .module('app.contacts')
    .factory('ContactsService', contactsService);

  contactsService.$inject = ['$http'];

  /* @ngInject */
  function contactsService($http) {
    var _model = {
      all: all,
      results: null
    };
    return _model;

    ////////////////

    function all() {
      $http.get('http://localhost:3000/api/friendships')
      .then(function(results) {
        console.log(results.data);
        _model.results = results.data;
      });
    };

    function search() {}
    function add() {}
    function remove() {}
    function accept() {}
    function reject() {}

  }

})();
