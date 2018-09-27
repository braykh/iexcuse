;(function() {
    'use strict';

    angular.module('app.categories.ctrls', [])

    .controller('CategoriesCtrl', ['$scope', 'CategoriesService', '$mdDialog', function($scope, CategoriesService, $mdDialog) {

    	$scope.listCategories = function() {
	        CategoriesService.list_categories().then(function (data){
	            $scope.categories = data;
	        });
	    };
	    $scope.listCategories();

	    $scope.updateCat = function(cat) {
	        CategoriesService.update_category(cat).then(function (data){
	        	if(data.id){
	        		cat = data;
	        	}
	        });
	    };

        $scope.promptCreateCat = function(ev) {
            var confirm = $mdDialog.prompt()
            .title('What your new category?')
            .placeholder('Category name')
            .ariaLabel('Category name')
            .initialValue('')
            .targetEvent(ev)
            .ok('Create')
            .cancel('Cancel');

            $mdDialog.show(confirm).then(function(result) {
            	if(result){
            		var cat = {
            			name: result,
            			active: 0
            		};
            		CategoriesService.create_category(cat).then(function (data){
			        	if(data){
			        		$scope.listCategories();
			        	}
			        });
            	}
                
            }, function() {
                
            });
        };

        $scope.deleteCat = function(cat) {
	        CategoriesService.delete_category(cat).then(function (data){
	        	if(data){
	        		$scope.listCategories();
	        	}
	        });
	    };

	    $scope.promptUpdateCat = function(ev, cat) {
            var confirm = $mdDialog.prompt()
            .title('Update category name.')
            .placeholder('Category name')
            .ariaLabel('Category name')
            .initialValue(cat.name)
            .targetEvent(ev)
            .ok('Okay!')
            .cancel('Cancel');

            $mdDialog.show(confirm).then(function(result) {
            	if(result){
            		cat.name = result;
            		$scope.updateCat(cat);
            	}
                
            }, function() {
                
            });
        }; 
	    
    }])


})()
