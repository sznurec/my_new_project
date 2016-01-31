(function(){
'use strict';

angular
	.module('myModule')
	.factory('myFactory', myFactory);

	function myFactory($http){
	
	return {
		getData: function () {
			return $http.get('https://api.github.com/users') 
			.then(function (result) {
				var res=result.data;
				return res;
				
			});
		}
	}		


	}	

})();