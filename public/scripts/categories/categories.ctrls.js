;(function() {
    'use strict';

    angular.module('app.categories.ctrls', [])

    .controller('CategoriesCtrl', ['$scope', 'CategoriesService', function($scope, CategoriesService) {

    	$scope.listCategories = function() {
	        CategoriesService.list_categories().then(function (data){
	            $scope.categories = data;
	            console.log($scope.categories);
	        });
	    };
	    $scope.listCategories();

	    $scope.updateCat = function(cat) {
	    	
	        CategoriesService.update_category(cat).then(function (data){
	        	if(data.id){
	        		cat = data;
	        	}
	            console.log(data);
	        });
	    };
	    
    }])


})()
