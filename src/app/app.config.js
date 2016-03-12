(function() {
  'use strict';

  angular
    .module('app')
    .config(configure);

  configure.$inject = ['$authProvider', '$ionicConfigProvider'];

  function configure ($authProvider, $ionicConfigProvider) {
    //$ionicConfigProvider.views.maxCache(0);
    $authProvider.configure({
            apiUrl: 'http://localhost:3000'
        });
  }

})();
