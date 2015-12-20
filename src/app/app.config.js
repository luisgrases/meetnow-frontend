(function() {
  'use strict';

  angular
    .module('app')
    .config(configure);

  configure.$inject = ['$authProvider'];

  function configure ($authProvider) {
    $authProvider.configure({
            apiUrl: 'http://localhost:3000'
        });
  }

})();
