(function() {
	'use strict';

	angular
		.module('cup')
		.service('CupService', CupService);

		function CupService() {
			var empty = true;
			this.isEmpty = isEmpty;
			this.fill=fill;
			this.drink=drink;

			function isEmpty() {
				return isEmpty;
			}

			function fill() {
				if(!this.isEmpty) {
					throw new Error ('overflow');
				}
			};
			function drink(){
				return true;
			};

		}
})();