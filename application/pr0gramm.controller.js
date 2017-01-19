var pr0grammController = function($scope,$pr0grammService,$timeout){
	$scope.openImage = null;

	$scope.getImagePosts = function(){
		return $pr0grammService.getData();
	};

	$scope.setActivePost = function(post){
		$scope.openImage = post;
		console.log("set open image:",post);
	};

	$scope.getActivePost = function(){
		return $scope.openImage;
	};

	$scope.isPostActive = function(){
		return !!$scope.openImage;
	};
};

app.controller('pr0grammController',pr0grammController);
pr0grammController.$inject = ['$scope','$pr0grammService','$timeout'];