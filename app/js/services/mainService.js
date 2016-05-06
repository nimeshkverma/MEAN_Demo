app.service('MainService', ['$http', function($http) {
	return {
		getData: getData
	};

	function getData() {
		return $http.get('https://buy.housing.com/api/v0/search/suggest/?string=f&cursor=1&polygon_uuid=7318a08bb6570a26e893&source=web');
	}
}]);
