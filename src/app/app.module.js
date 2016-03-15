(function() {
  'use strict';

  angular
    .module('app', [
      /* Shared modules */
      'ionic',
      'ng-token-auth',
      'app.core',
      'app.directives',
      'angularMoment',
      'filters',
      'vcRecaptcha',
      'app.services',

      /* Feature areas */
      'app.helpers',
      'app.account',
      'app.registration',
      'app.authentication',
      'app.session',
      'app.contacts',
      'app.events'

    ]);
})();
