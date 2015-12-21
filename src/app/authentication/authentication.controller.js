(function() {
  'use strict';

  angular
  .module('app.authentication')
  .controller('AuthenticationController', AuthenticationController);

  AuthenticationController.$inject = ['$auth','$rootScope' ];

  /* @ngInject */
  function AuthenticationController($auth, $rootScope) {
    var vm = this;
    vm.signInUser = signInUser;

    $rootScope.$on('auth:login-success', function(ev, user) {
      alert('Welcome ', user.email);
      console.log(user);
    });

      function signInUser() {
      $auth.submitLogin(vm.loginForm)
        .then(function(resp) {
          console.log("Login Succesfully")
        })
        .catch(function(resp) {
          console.log("Login Problem")
        });
    };
  }
})();
