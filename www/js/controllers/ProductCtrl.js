angular.module('starter.ProductCtrl',[])
.controller('ProductCtrl', function($scope, $stateParams, $timeout,  Products, Shops,
									ActorReferences, ionicMaterialInk, ionicMaterialMotion) {

    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

  var imageReferences = [];
	var references = [];
   
	$scope.hasProducts = true;
	$scope.showGallery=false;

console.log($stateParams.shopId);

	$timeout(function() {
    references = ActorReferences.getReferences($stateParams.shopId).then(function(data){
    	console.log( "product ctrl" );
      console.log($stateParams.shopId);
    	
			$scope.references = data;
    		console.log(  $scope.references);

	    });
  }, 1000);
    
  console.log("1 references");
  console.log(references);
  console.log("2 references");
  console.log($scope.references);
  console.log("image references");
    
  var j=0;
	angular.forEach($scope.references,function(item){
    console.log(j);
    console.log(item);
    j++;
    /*
      if (item.idCg.idCg==82) {
        console.log("111");
      }else{
        console.log("222");
    }*/
  });

  console.log(imageReferences);

    $timeout(function () {
    	ionicMaterialMotion.fadeSlideInRight();
	}, 300);


});
