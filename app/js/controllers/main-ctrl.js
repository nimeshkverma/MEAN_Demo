app.controller('MainCtrl', ['$scope', 'MainService', function($scope, MainService) {
	$scope.message = "Hello World";
	MainService.getData()
	.success(function(response) {
		console.log(response);
	})
	.error(function(error) {
		console.log(error);
	});
}]);
