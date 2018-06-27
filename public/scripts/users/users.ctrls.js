;(function() {
    'use strict';

    angular.module('app.users.ctrls', [])


    .controller('UsersCtrl', ['$scope', 'AuthService', function($scope, AuthService) {

        AuthService.list_users().then(function (data){
            $scope.users = data;
        });

    }])


})()
