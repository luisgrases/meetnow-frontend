(function() {
  'use strict';

  angular
  .module('app.authentication')
  .controller('AuthenticationController', AuthenticationController);

  AuthenticationController.$inject = ['$auth'];

  /* @ngInject */
  function AuthenticationController($auth) {
    var vm = this;
  }
})();
