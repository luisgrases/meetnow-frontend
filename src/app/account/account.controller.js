(function() {
  'use strict';

  angular
  .module('app.account')
  .controller('AccountController', AccountController);

  AccountController.$inject = ['$auth', '$state', 'Session', '$ionicHistory'];

  /* @ngInject */
  function AccountController($auth, $state, Session, $ionicHistory) {
    var vm = this;
    vm.signOutUser = signOutUser;
    vm.Session = Session;
    vm.settings = {
      enableFriends: true
    };

    ////////////////

    function signOutUser()  {
      $auth.signOut()
        .then(function(resp) {
          $ionicHistory.clearCache();
          $state.go("authentication");
        })
        .catch(function(resp) {
          // handle error response
        });
    }

  }
})();
