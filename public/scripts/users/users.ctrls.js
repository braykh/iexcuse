;(function() {
    'use strict';

    angular.module('app.users.ctrls', [])


    .controller('UsersCtrl', ['$scope', 'AuthService', '$timeout', function($scope, AuthService, $timeout) {

    	$scope.selected = [];
        $scope.limitOptions = [1, 2];
        $scope.query = {
            order: 'id', limit: 1, page: 1
        };

    	$scope.listUsers = function(page, limit) {
	        AuthService.list_users(page, limit).then(function (data){
	            $scope.users = data;
	            console.log($scope.users);
	        });
	    };
	    
	    $scope.listUsers(0, $scope.query.limit);    

        AuthService.user_count().then(function (data){
            $scope.users_count = data;
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
            	$scope.listUsers(page - 1, limit);
            }, 1000);
        };


    }])


})()
