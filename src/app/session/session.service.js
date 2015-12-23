(function() {

'use strict';
angular
    .module('app.session', [])
    .service('Session', function () {
      var vm = this;
  vm.create = function (sessionId, userId, userRole) {
    vm.id = sessionId;
    vm.userId = userId;
    vm.userRole = userRole;
  };
  vm.destroy = function () {
    vm.id = null;
    vm.userId = null;
    vm.userRole = null;
  };
});
})();
