(function() {
  'use strict';

  angular
  .module('app.registration')
  .controller('RegistrationController', RegistrationController);

  RegistrationController.$inject = ['$auth'];

  /* @ngInject */
  function RegistrationController($auth) {
    var vm = this;
    vm.registerUser = registerUser;

    function registerUser(){
      console.log("Registering user...")
      console.log(vm.registrationForm.password);
      $auth.submitRegistration(vm.registrationForm);
    };
  }
})();
