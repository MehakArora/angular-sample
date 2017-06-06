function homeController($stateParams, $scope){
	$scope.set = function(){
		$scope.note = "The id is "+$stateParams.id;
		console.log($stateParams.id);
	}
	$scope.set();
}
function pageController(){
}
function paperController(){}
function loginController(){}

angular.module('mainApp')
		.controller('homeController',homeController)
		.controller('pageController',pageController)
		.controller('paperController',paperController)
		.controller('loginController',loginController);
