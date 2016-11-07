angular.module('starter.PointsCtrl',[])
.controller('PointsCtrl', function($scope, $rootScope, Points, Actor, $ionicPopup) {

	// console.log( JSON.stringify($rootScope) );
	$scope.selectedItem;
	$scope.points= {
		numberOfPoints: 1000,
		trasnferPoints:  0,
		user:'',
		numDocumentoActor:'',
		numDocumentoActor2:''
	}
	
	 $scope.getAllActorList = function() {
		Actor.all().then(function(response){
		    $scope.actors = response.data;
		    // console.log(response.data);
		});
		
	}
	
	$scope.getAllActorList();
	$scope.checkPoints = function() {

		Points.getPuntosActorByNumDocumentoActor( "1111111111" ).then(function(data){
		    // console.log( "Puntos Actor: " + data);
		    // console.log( "Puntos Actor: " + data.totalPuntos);
		    $scope.points.numberOfPoints = data.totalPuntos;
		});

	}

	$scope.transfer = function(selectedItem) {
		console.log("selectedItem: "+ selectedItem);// cedula sellecionada
		$scope.points.numDocumentoActor = selectedItem;
		// console.log("transfer: "+ $scope.points.trasnferPoints);
		// console.log("user: "+ $scope.points.user);
		
		if ( $scope.points.trasnferPoints > $scope.points.numberOfPoints ){
			$ionicPopup.alert({
	           title: 'Información',
	           template: 'cantidad invalida'
	         });

		}else{
			// $scope.points.numberOfPoints -= $scope.points.trasnferPoints;
			Points.transferPuntosActorByNumDocumentoActor($scope.points.numDocumentoActor,$scope.points.numDocumentoActor2, $scope.points.trasnferPoints ).then(function(data){
			    // console.log( "transferido: " + data);
			    if (data== true){

			    	$ionicPopup.alert({
			           title: 'Información',
			           template: 'Transferencia realizada exitosamente'
			         });
			    	
			    }else{
			    	$ionicPopup.alert({
			           title: 'Información',
			           template: 'Error en la Transferencia'
			         });
			    }
			    $scope.checkPoints();
			});
		}
		console.log("points:" + $scope.points.numberOfPoints);
	}
	

});