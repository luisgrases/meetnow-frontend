(function() {
    'use strict';

	angular
		.module('app')
		.run(runBlock);

	runBlock.$inject = ['$ionicPlatform', '$rootScope', '$auth', '$location'];

	function runBlock($ionicPlatform, $rootScope, $auth, $location) {
		$auth.validateUser().catch(function(err){
        console.log('not authenticated', err);
        $location.path('/sign_in');
    });

		$ionicPlatform.ready(function() {
			
			// Hide the accessory bar by default (remove this to show the accessory bar
			// above the keyboard for form inputs)
			if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}

			if (window.StatusBar) {
				// org.apache.cordova.statusbar required
				StatusBar.styleLightContent();
			}
		});
	}
})();
