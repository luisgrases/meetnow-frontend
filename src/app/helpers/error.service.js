(function() {
  'use strict';

  angular
    .module('app.helpers')
    .factory('ErrorMessage', ErrorMessage);

  ErrorMessage.$inject = ['$ionicPopup'];

  /* @ngInject */
  function ErrorMessage($ionicPopup) {
    var _model = {
      showAlert: showAlert
    };
    return _model;

    ////////////////

     function showAlert(messages) {
      
       var alertPopup = $ionicPopup.alert({
         title: 'Error',
         template: formatArrayToMessage(messages)
       });

       alertPopup.then(function(res) {
       });
    };



    function formatArrayToMessage(array){
      var result = '';
      angular.forEach(array, function(message){
        result += message + '<br>';
      })
      return result
    }

    function errorFormatter(error){
      //check how errors are passed and do something

    }

  }

})();
