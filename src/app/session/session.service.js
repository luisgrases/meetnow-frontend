(function() {

'use strict';
angular
    .module('app.session', [])
    .service('Session', function () {
      var vm = this;
  vm.create = function (userId) {
    vm.id = userId;
  };
  vm.destroy = function () {
    vm.id = null;
  };
});
})();
