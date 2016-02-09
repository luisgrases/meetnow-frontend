(function() {
  'use strict';

  angular
  .module('app.registration')
  .controller('RegistrationController', RegistrationController);

  RegistrationController.$inject = ['$auth', 'vcRecaptchaService', '$ionicPopup', 'ErrorMessage', '$rootScope'
  ];

  /* @ngInject */
  function RegistrationController($auth, vcRecaptchaService, $ionicPopup, ErrorMessage, $rootScope) {
    var vm = this;
    vm.registerUser = registerUser;

    function registerUser(){
      $auth.submitRegistration(vm.registrationForm)
        .then(function(resp) {
          // handle success response
        })
        .catch(function(resp) {
            ErrorMessage.showAlert(resp.data.errors.full_messages);
          });
    };    
  }
})();
