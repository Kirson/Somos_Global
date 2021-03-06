// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'ionMdInput','ngCordova',
                            'starter.UserServices','UserControllers','SocialServices','JSONServices',
                            'starter.MenuCtrl','LocalStorageServices','starter.MapCtrl','starter.MapShopCtrl',
                            'starter.PointsCtrl','starter.ShopCtrl', 'starter.ProductCtrl','starter.ProfileCtrl',
                            'starter.CategoryServices','starter.ProductServices','starter.ActorServices',
                            'starter.ShopServices', 'starter.CategoryCtrl', 'starter.ActorReferenceServices', 'starter.PointsServices'
                            ])

.run(function($ionicPlatform, $rootScope) {

     // $rootScope.restUrl = "http://186.5.121.17:9090/SomosGlobal/webresources/";
    $rootScope.restUrl = "http://localhost:8080/SomosGlobal/webresources/";

    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.activity', {
        url: '/activity',
        views: {
            'menuContent': {
                templateUrl: 'templates/activity.html',
                controller: 'ActivityCtrl'
            },
            'fabContent': {
                template: '<button id="fab-activity" class="button button-fab button-fab-top-right expanded button-energized-900 flap"><i class="icon ion-paper-airplane"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 200);
                }
            }
        }
    })


    .state('app.map', {
        url: '/map',
        views: {
            'menuContent': {
                templateUrl: 'templates/map.html',
                controller: 'MapCtrl'
            },
            'fabContent': {
                template: ''
                
            }
        }
    })

    .state('app.mapshop', {
        url: '/mapshop/:shopId',
        views: {
            'menuContent': {
                templateUrl: 'templates/mapShop.html',
                controller: 'MapShopCtrl'
            },
            'fabContent': {
                template: ''
                
            }
        }
    })

    .state('app.friends', {
        url: '/friends',
        views: {
            'menuContent': {
                templateUrl: 'templates/friends.html',
                controller: 'FriendsCtrl'
            },
            'fabContent': {
                template: '<button id="fab-friends" class="button button-fab button-fab-top-left expanded button-energized-900 spin"><i class="icon ion-chatbubbles"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-friends').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })

    .state('app.gallery', {
        url: '/gallery',
        views: {
            'menuContent': {
                templateUrl: 'templates/gallery.html',
                controller: 'GalleryCtrl'
            },
            'fabContent': {
                template: '<button id="fab-gallery" class="button button-fab button-fab-top-right expanded button-energized-900 drop"><i class="icon ion-heart"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-gallery').classList.toggle('on');
                    }, 600);
                }
            }
        }
    })

    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })
    .state('app.intro', {
        url: '/intro',
        views: {
            'menuContent': {
                templateUrl: 'templates/intro.html',
                controller: 'IntroCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })
    .state('app.profile', {
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.register', {
        url: '/register',
        views: {
            'menuContent': {
                templateUrl: 'templates/register.html',
                controller: 'LoginCtrl'
            },
            'fabContent': {
                template: ''
            }
            

        }
    })

    .state('app.registerConfirm', {
        url: '/registerConfirm',
        views: {
            'menuContent': {
                templateUrl: 'templates/register-confirm.html',
                controller: 'LoginCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.registerTerms', {
        url: '/registerTerms',
        views: {
            'menuContent': {
                templateUrl: 'templates/register-terms.html',
                controller: 'LoginCtrl'
            },'fabContent': {
                template: ''
            }
        }
    })

    .state('app.category', {
        url: '/category',
        views: {
            'menuContent': {
                templateUrl: 'templates/category.html',
                controller: 'CategoryCtrl'
            },'fabContent': {
                template: ''
            }

        }
    })

    .state('app.subcategory', {
        url: '/subcategory/:catId',
        views: {
            'menuContent': {
                templateUrl: 'templates/category.html',
                controller: 'CategoryCtrl'
            },'fabContent': {
                template: ''
            }

        }
    })

    .state('app.categoryDetail', {
        url: '/sucategoryDetail/:catId',
        views: {
            'menuContent': {
                templateUrl: 'templates/categoryDetail.html',
                controller: 'ShopCtrl'
            },'fabContent': {
                template: ''
            }
        }
    })

    .state('app.shop', {
        url: '/shop/:shopId',
        views: {
            'menuContent': {
                templateUrl: 'templates/shop.html',
                controller: 'ProductCtrl'
            },'fabContent': {
                template: ''
            }
        }
    })

    .state('app.products', {
        url: '/products',
        views: {
            'menuContent': {
                templateUrl: 'templates/shop.html',
                controller: 'ProductCtrl'
            },'fabContent': {
                template: ''
            }
        }
    })

    .state('app.points', {
        url: '/points',
        views: {
            'menuContent': {
                templateUrl: 'templates/points.html',
                controller: 'PointsCtrl'
            },'fabContent': {
                template: ''
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/intro');
});
