(function() {
  'use strict';

  angular
  .module('app.registration')
  .controller('RegistrationController', RegistrationController);

  RegistrationController.$inject = ['$auth', 'vcRecaptchaService', '$ionicPopup', 'ErrorMessage', '$rootScope', 'Session', '$state'];

  /* @ngInject */
  function RegistrationController($auth, vcRecaptchaService, $ionicPopup, ErrorMessage, $rootScope, Session, $state) {
    var vm = this;
    vm.registerUser = registerUser;

    function registerUser(){
      $auth.submitRegistration(vm.registrationForm)
        .then(function(resp) {
          $auth.submitLogin(vm.registrationForm)
          .then(function(response) {
            Session.create(response.id);
            $state.go("tab.events.index");
          })
          .catch(function(response) {
            ErrorMessage.showAlert(response.errors);
          });
        })
        .catch(function(resp) {
            ErrorMessage.showAlert(resp.data.errors.full_messages);
          });
    };    
  }
})();
