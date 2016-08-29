// 'use strict';

angular.module('starter.MenuCtrl', [])
.controller('MenuCtrl', function($scope, $ionicModal, $ionicPopover, $timeout,ionicMaterialInk) {

console.log("menu");
	$scope.tasks = [
    { title: 'Perfil' , url : '#/app/profile'},
    { title: 'Locales cercanos' , url : '#/app/map'},
    { title: 'Categorías' , url : '#/app/category'},
    { title: 'Salir', url : '#/app/login'}
  ];

})
