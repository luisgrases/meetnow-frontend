(function() {

'use strict';
angular
    .module('app.session', [])
    .service('Session', function ($http) {
      var vm = this;
      vm.fetch = fetch;
      vm.current_user = null;

  vm.create = function (userId) {
    vm.id = userId;
  };

  vm.destroy = function () {
    vm.id = null;
  };

  vm.activeSession = function () {
    if (vm.id == null) {
      return false;
    }
    return true;
  }

    function fetch() {
      return $http.get('http://localhost:3000/api/users/me')
      .then(function(results){
        vm.current_user = results.data;
        console.log(vm.current_user);
      });
    };

  })
})();
