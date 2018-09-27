;(function() {
    'use strict';

    angular.module('app.excuses.ctrls', [])

    .controller('ExcusesCtrl', ['$scope', 'ExcusesService', '$mdDialog', 'CategoriesService', function($scope, ExcusesService, $mdDialog, CategoriesService) {

        $scope.selected = [];
        $scope.limitOptions = [5, 10, 15];
        $scope.query = {
            order: 'id', limit: 5, page: 1
        };

    	$scope.listExcuses = function(page, limit) {
	        ExcusesService.list_excuses(page, limit).then(function (data){
	            $scope.excuses = data;
	        });
	    };
	    $scope.listExcuses(0, $scope.query.limit);

        $scope.listCategories = function() {
            CategoriesService.list_categories().then(function (data){
                $scope.categories = data;
            });
        };
        $scope.listCategories();

        ExcusesService.excuses_count().then(function (data){
            $scope.excusesCount = data;
        });

        $scope.options = {
            rowSelection: true,
            multiSelect: true,
            autoSelect: true,
            decapitate: false,
            largeEditDialog: false,
            boundaryLinks: true,
            limitSelect: true,
            pageSelect: true
        };

        $scope.onPaginate = function(page, limit) {
            // console.log('Scope Page: ' + $scope.query.page + ' Scope Limit: ' + $scope.query.limit);
            // console.log('Page: ' + page + ' Limit: ' + limit);
            // console.log($scope.selected);

            $scope.promise = $timeout(function () {
                $scope.listExcuses(page - 1, limit);
            }, 1000);
        };

        $scope.showAdvanced = function(ev) {
            $mdDialog.show({
              // controller: function DialogController($scope, $mdDialog) {
              //   $scope.closeDialog = function() {
              //     $mdDialog.hide();
              //   };
              //   $scope.cancel = function() {
              //     $mdDialog.cancel();
              //   };
              //   $scope.answer = function(answer) {
              //     $mdDialog.hide(answer);
              //   };
              // },
              templateUrl: 'public/views/dialog1.tmpl.html',
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose:true,
              preserveScope: true, 
              scope: $scope,
              fullscreen: true // Only for -xs, -sm breakpoints.
            })
            .then(function(answer) {
              $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
              $scope.status = 'You cancelled the dialog.';
            });
        };


	    // $scope.updateCat = function(cat) {
	    //     CategoriesService.update_category(cat).then(function (data){
	    //     	if(data.id){
	    //     		cat = data;
	    //     	}
	    //     });
	    // };

        // $scope.promptCreateCat = function(ev) {
        //     var confirm = $mdDialog.prompt()
        //     .title('What your new category?')
        //     .placeholder('Category name')
        //     .ariaLabel('Category name')
        //     .initialValue('')
        //     .targetEvent(ev)
        //     .ok('Okay!')
        //     .cancel('Cancel');

        //     $mdDialog.show(confirm).then(function(result) {
        //     	if(result){
        //     		var cat = {
        //     			name: result,
        //     			active: 0
        //     		};
        //     		CategoriesService.create_category(cat).then(function (data){
			     //    	if(data){
			     //    		$scope.listCategories();
			     //    	}
			     //    });
        //     	}
                
        //     }, function() {
                
        //     });
        // };

     //    $scope.deleteCat = function(cat) {
	    //     CategoriesService.delete_category(cat).then(function (data){
	    //     	if(data){
	    //     		$scope.listCategories();
	    //     	}
	    //     });
	    // };

	    // $scope.promptUpdateCat = function(ev, cat) {
     //        var confirm = $mdDialog.prompt()
     //        .title('Update category name.')
     //        .placeholder('Category name')
     //        .ariaLabel('Category name')
     //        .initialValue(cat.name)
     //        .targetEvent(ev)
     //        .ok('Okay!')
     //        .cancel('Cancel');

     //        $mdDialog.show(confirm).then(function(result) {
     //        	if(result){
     //        		cat.name = result;
     //        		$scope.updateCat(cat);
     //        	}
                
     //        }, function() {
                
     //        });
     //    }; 
	    
    }])


})()
