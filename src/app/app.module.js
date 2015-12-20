(function() {
  'use strict';

  angular
    .module('app', [
      /* Shared modules */
      'ionic',
      'ng-token-auth',
      'app.core',
      'app.directives',

      /* Feature areas */
      'app.account',
      'app.registration',
      'app.contacts',
      'app.events'

    ]);
})();
