(function() {
  'use strict';

  angular
  .module('app.authentication')
  .controller('AuthenticationController', AuthenticationController);

  AuthenticationController.$inject = ['$auth','$rootScope', 'Session', '$state', 'ErrorMessage'];

  /* @ngInject */
  function AuthenticationController($auth, $rootScope, Session, $state, ErrorMessage) {
    var vm = this;
    vm.signInUser = signInUser;
    vm.goToRegistration = goToRegistration;

    function goToRegistration(){
       $state.go("registration");
    }

    function signInUser() {
      vm.loginForm.username = vm.loginForm.username.toLowerCase()
      $auth.submitLogin(vm.loginForm)
        .then(function(response) {
          Session.create(response.id);
          $state.go("tab.events.index");
        })
      .catch(function(response) {
        ErrorMessage.showAlert(response.errors);
      });
    };
  }
})();
