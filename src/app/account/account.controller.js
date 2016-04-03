(function() {
  'use strict';

  angular
  .module('app.account')
  .controller('AccountController', AccountController);

  AccountController.$inject = ['$auth', '$state', 'Session', '$ionicHistory', 'SocketMessageHandler'];

  /* @ngInject */
  function AccountController($auth, $state, Session, $ionicHistory, SocketMessageHandler) {
    var vm = this;
    vm.signOutUser = signOutUser;
    vm.goToAbout = goToAbout;
    vm.goToTerms = goToTerms;
    vm.Session = Session;
    vm.settings = {
      enableFriends: true
    };

    ////////////////
    function goToAbout() {
      $state.go("tab.account.about")
    }

    function goToTerms() {
      $state.go("tab.account.terms")
    }

    function signOutUser()  {
      $auth.signOut()
        .then(function(resp) {
          $ionicHistory.clearCache();
          SocketMessageHandler.unsubscribeAllEvents();
          SocketMessageHandler.unsubscribeToMyself();
          $state.go("authentication");
        })
        .catch(function(resp) {
          // handle error response
        });
    }

  }
})();
