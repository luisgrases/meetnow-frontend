(function() {
  'use strict';

  angular
  .module('app.authentication')
  .controller('AuthenticationController', AuthenticationController);

  AuthenticationController.$inject = ['$auth','$rootScope', 'Session', '$state'];

  /* @ngInject */
  function AuthenticationController($auth, $rootScope, Session, $state) {
    var vm = this;
    vm.signInUser = signInUser;

    $rootScope.$on('auth:login-success', function(ev, user) {
    });

      function signInUser() {
        console.log(Session.activeSession());
        $auth.submitLogin(vm.loginForm)
          .then(function(response) {
            Session.create(response.id);
            $state.go("tab.events.index");
          })
        .catch(function(response) {
          console.log("Login Problem")
        });
    };
  }
})();
