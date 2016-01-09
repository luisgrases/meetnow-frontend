(function() {
  'use strict';

  angular
  .module('app.authentication')
  .controller('AuthenticationController', AuthenticationController);

  AuthenticationController.$inject = ['$auth','$rootScope', 'Session'];

  /* @ngInject */
  function AuthenticationController($auth, $rootScope, Session) {
    var vm = this;
    vm.signInUser = signInUser;

    $rootScope.$on('auth:login-success', function(ev, user) {
    });

      function signInUser() {
        console.log(Session.activeSession());
      $auth.submitLogin(vm.loginForm)
        .then(function(response) {
         Session.create(response.id);

        })
        .catch(function(response) {
          console.log("Login Problem")
        });
    };
  }
})();
