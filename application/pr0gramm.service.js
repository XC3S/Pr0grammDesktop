app.factory('$pr0grammService', function($http){
	var data = [];

	function init(){
		$http.get("http://pr0gramm.com/api/items/get?flags=1").then(function(response){
			data = response.data.items;
			console.log("loaded ",data.length," images");
			console.log(data);
		});
	}
	init();

	return {
		getData: function(){
			return data;
		}
	}
});