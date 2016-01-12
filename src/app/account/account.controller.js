(function() {
  'use strict';

  angular
  .module('app.account')
  .controller('AccountController', AccountController);

  AccountController.$inject = ['$auth', '$state'];

  /* @ngInject */
  function AccountController($auth, $state) {
    var vm = this;
    vm.signOutUser = signOutUser;
    vm.settings = {
      enableFriends: true
    };

    ////////////////

    function signOutUser()  {
      $auth.signOut()
        .then(function(resp) {
          $state.go("authentication");
        })
        .catch(function(resp) {
          // handle error response
        });
    }

  }
})();
