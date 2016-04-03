(function() {
	'use strict';

	angular
		.module('app.account')
		.config(routes);

	routes.$inject = ['$stateProvider'];

	function routes($stateProvider) {

		 $stateProvider.state('tab.account', {
      abstract: true,
      url: '/account',
      views: {
        'tab-account': {
          template: '<ion-nav-view></ion-nav-view>'
        }
      }
    });

    $stateProvider.state('tab.account.index', {
      url: '',
      templateUrl: 'app/account/account.html',
			controller: 'AccountController as vm'
    });

	}
})();
