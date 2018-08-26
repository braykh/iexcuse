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
	    
    }])


})()
