;(function() {
    'use strict';

    angular.module('app.services', [])

    .factory('AuthService', ['$http', '$q', 'User', 'appConfig', function($http, $q, User, appConfig) {
        var scope = {};
        scope.user = {};

        scope.logout = function (){
            $http({method: 'POST', url: appConfig.apiBaseUrl + 'users/session_destroy'}).
            then(function(data, status, header, config) {
                User.destroy();
                window.location.reload();
            })
        }

        scope.current_user = function (){
            var deffered = $q.defer();
            $http({method: 'GET', url: appConfig.apiBaseUrl + 'users/get_current'}).
            then(function(data, status, headers, config) {
                User.set(data.data);
                scope.user = User;
                deffered.resolve(data.data);
            }).
            catch(function(data, status, headers, config) {
                deffered.reject(data);
            });
            return deffered.promise;
        }

        scope.list_users = function (page, limit){
            var deffered = $q.defer();
            $http({method: 'GET', url: appConfig.apiBaseUrl + 'users/all_users?page=' + page + '&limit=' + limit}).
            then(function(data, status, headers, config) {
                deffered.resolve(data.data);
            }).
            catch(function(data, status, headers, config) {
                deffered.reject(data);
            });
            return deffered.promise;
        }

        scope.user_count = function (){
            var deffered = $q.defer();
            $http({method: 'GET', url: appConfig.apiBaseUrl + 'users/users_count'}).
            then(function(data, status, headers, config) {
                deffered.resolve(data.data);
            }).
            catch(function(data, status, headers, config) {
                deffered.reject(data);
            });
            return deffered.promise;
        }

        return scope;

    }])


    .service('User', ['$http', '$q',  function ($http, $q) {

        this.get = function(){
            return this.data;
        }

        this.set = function (user) {
            this.id = user.id;
            this.first_name = user.first_name;
            this.last_name = user.last_name;
            this.email = user.email;
            this.role = user.role;
        }

        this.destroy = function () {
            this.id = null;
            this.first_name = null;
            this.last_name = null;
            this.email = null;
            this.role = null;
        }

        return this.data;

    }])

    .factory('CategoriesService', ['$http', '$q', 'appConfig', function($http, $q, appConfig) {
        var scope = {};
        scope.category = {};

        scope.list_categories = function (){
            var deffered = $q.defer();
            $http({method: 'GET', url: appConfig.apiBaseUrl + 'categories/all_categories'}).
            then(function(data, status, headers, config) {
                deffered.resolve(data.data);
            }).
            catch(function(data, status, headers, config) {
                deffered.reject(data);
            });
            return deffered.promise;
        }

        scope.update_category = function (cat){
            var deffered = $q.defer();
            $http({method: 'POST', url: appConfig.apiBaseUrl + 'categories/update_category', data: cat}).
            then(function(data, status, headers, config) {
                deffered.resolve(data.data);
            }).
            catch(function(data, status, headers, config) {
                deffered.reject(data);
            });
            return deffered.promise;
        }

        scope.create_category = function (cat){
            var deffered = $q.defer();
            $http({method: 'POST', url: appConfig.apiBaseUrl + 'categories/create_category', data: cat}).
            then(function(data, status, headers, config) {
                deffered.resolve(data.data);
            }).
            catch(function(data, status, headers, config) {
                deffered.reject(data);
            });
            return deffered.promise;
        }

        scope.delete_category = function (cat){
            var deffered = $q.defer();
            $http({method: 'POST', url: appConfig.apiBaseUrl + 'categories/delete_category', data: cat}).
            then(function(data, status, headers, config) {
                deffered.resolve(data.data);
            }).
            catch(function(data, status, headers, config) {
                deffered.reject(data);
            });
            return deffered.promise;
        }

        return scope;

    }])

    .factory('ExcusesService', ['$http', '$q', 'appConfig', function($http, $q, appConfig) {
        var scope = {};
        scope.excuse = {};

        scope.list_excuses = function (page, limit){
            var deffered = $q.defer();
            $http({method: 'GET', url: appConfig.apiBaseUrl + 'excuses/all_excuses?page=' + page + '&limit=' + limit}).
            then(function(data, status, headers, config) {
                deffered.resolve(data.data);
            }).
            catch(function(data, status, headers, config) {
                deffered.reject(data);
            });
            return deffered.promise;
        }

        scope.excuses_count = function (){
            var deffered = $q.defer();
            $http({method: 'GET', url: appConfig.apiBaseUrl + 'excuses/excuses_count'}).
            then(function(data, status, headers, config) {
                deffered.resolve(data.data);
            }).
            catch(function(data, status, headers, config) {
                deffered.reject(data);
            });
            return deffered.promise;
        }

        // scope.update_category = function (cat){
        //     var deffered = $q.defer();
        //     $http({method: 'POST', url: appConfig.apiBaseUrl + 'categories/update_category', data: cat}).
        //     then(function(data, status, headers, config) {
        //         deffered.resolve(data.data);
        //     }).
        //     catch(function(data, status, headers, config) {
        //         deffered.reject(data);
        //     });
        //     return deffered.promise;
        // }

        scope.create_excuse = function (excuse){
            var deffered = $q.defer();
            $http({method: 'POST', url: appConfig.apiBaseUrl + 'excuses/create_excuse', data: excuse}).
            then(function(data, status, headers, config) {
                deffered.resolve(data.data);
            }).
            catch(function(data, status, headers, config) {
                deffered.reject(data);
            });
            return deffered.promise;
        }

        // scope.delete_category = function (cat){
        //     var deffered = $q.defer();
        //     $http({method: 'POST', url: appConfig.apiBaseUrl + 'categories/delete_category', data: cat}).
        //     then(function(data, status, headers, config) {
        //         deffered.resolve(data.data);
        //     }).
        //     catch(function(data, status, headers, config) {
        //         deffered.reject(data);
        //     });
        //     return deffered.promise;
        // }

        return scope;

    }])


})()
