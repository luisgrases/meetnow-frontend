(function() {
  'use strict';

  angular
    .module('app.services')
    .factory('values', values);

  values.$inject = [];

  /* @ngInject */
  function values() {
    var _model = {
      processing: false,
    };
    return _model;

    ////////////////

  }

})();
