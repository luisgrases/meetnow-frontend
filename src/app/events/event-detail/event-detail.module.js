(function() {
  'use strict';

  angular
    .module('app.events.detail', [
      'ionic',
      'app.events.detail.invite',
      'app.events.detail.invited',
      'app.events.detail.edit',
      'app.events.detail.description'
    ]);

})();
