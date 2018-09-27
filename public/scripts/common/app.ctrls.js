;(function() {
    'use strict';

    angular.module('app.ctrls', [])

    .controller('AppCtrl', ['$scope', '$mdSidenav', '$mdDialog', 'AuthService', 'User', function($scope, $mdSidenav, $mdDialog, AuthService, User) {

        // Open search btn
        $scope.openSearch = function() {
            $scope.isSearchOpen = true;
        };

        $scope.closeSearch = function(){
            $scope.isSearchOpen = false;
        };

        $scope.toggleSidenav = function() {
            $mdSidenav('sidenav-left').toggle();
        }

        $scope.closeDialog = function() {
            $mdDialog.hide();
        }

        $scope.log_out = function() {
            AuthService.logout();
        }

        AuthService.current_user();

        $scope.user = User;

    }])


    .controller('DashboardCtrl', ['$scope', 'AuthService', 'ExcusesService', function($scope, AuthService, ExcusesService) {

        AuthService.user_count().then(function (data){
            $scope.users_count = data;
        });

        ExcusesService.excuses_count().then(function (data){
            $scope.excusesCount = data;
        });

        // === weekly growth
        $scope.weeklygrowthconfig = {
            data: {
    			columns: [
    				['Page Views', 740, 850, 700, 840, 790, 730, 830],
    				['Sessions', 790, 800, 670, 640, 740, 550, 800]
    			],
    			type: 'area-spline',
    		},
    		color: {
    			pattern: ["#40C4FF",  "#448AFF"]
    		},
    		legend: {
    			position: "bottom"
    		},
    		size: {
    			height: 300
    		},
            axis: {
                y: { max: 900, min: 300}

            }
        };

        // === browser sessions
        $scope.browserconfig = {
            data: {
                columns: [
                ["Chrome", 50.9],
                ["Firefox", 16.1],
                ["Safari", 10.9],
                ["IE", 15.1],
                ["Other",7]
                ],
                type: "donut",
            },
            size: {
                width: 320,
                height: 280
            },
            donut: {
                width: 60
            },

            color: {
                pattern: ["#4CAF50", "#8BC34A", "#FFC107", "#CDDC39", "#FF9800"]
            }
        };

        $scope.visitorsageconfig = {
            data: {
                x: 'x',
                y: 'y',
                columns: [
                    ['x', '18-25', '26-35', '36-50', '51-80', '80-above'],
                    ['Male', 29.4, 28, 61, 38, 20],
                    ['Female', 29.6, 60, 23, 49, 34]

                ],


                type: 'bar',
                groups: [
                    ['Male', 'Female']
                ],
            },
            color: {
                pattern: ["#4CAF50", "#CDDC39"]
            },
            axis: {
                x: {
                    type: 'category' // this needed to load string x value
                },
                y: {
                    label: {text: 'Sessions', position: 'outer-middle'}
                }
            }

        }

    }])


})()
