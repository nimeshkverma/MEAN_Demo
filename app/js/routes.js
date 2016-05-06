app.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider.
		when('/phone', {
			templateUrl: 'partials/first.html',
			controller: 'MainCtrl'
		}).
		when('/cart', {
			templateUrl: 'partials/second.html',
			controller: 'MainCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
		$locationProvider.html5Mode(true);
	}
]);
