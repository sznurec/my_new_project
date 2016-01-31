(function() {
  'use strict';

  angular
	.module('myModule')
	.controller('myController',myController);
	
	function myController(myFactory){
		
		var vm = this;
		myFactory.getData().then(function(data){
			vm.data=data;
		});
	}

})();	