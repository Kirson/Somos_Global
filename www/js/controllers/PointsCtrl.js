angular.module('starter.PointsCtrl',[])
.controller('PointsCtrl', function($scope, $rootScope) {

	// console.log( JSON.stringify($rootScope) );

	$scope.points= {
		numberOfPoints: 40,
		trasnferPoints:  0,
		user:''
	}	
	$scope.transfer = function() {
		console.log("transfer: "+ $scope.points.trasnferPoints);
		console.log("user: "+ $scope.points.user);
		if ( $scope.points.trasnferPoints > $scope.points.numberOfPoints ){
			alert("cantidad invalida");
		}else{
			$scope.points.numberOfPoints -= $scope.points.trasnferPoints;
		}
		console.log("points:" + $scope.points.numberOfPoints);
	}
	

});