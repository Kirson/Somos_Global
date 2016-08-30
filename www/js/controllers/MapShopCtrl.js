angular.module('starter.MapShopCtrl', [])

    .controller('MapShopCtrl', function($scope, $ionicLoading, $compile,LocalAppStorage,
                                        ActorReferences,$ionicPopup,Actor,$state,$timeout,$stateParams) {


    	$scope.$parent.showHeader();
    	$scope.$parent.clearFabs();
    	$scope.isExpanded = false;
    	$scope.$parent.setExpanded(false);
    	$scope.$parent.setHeaderFab(false);

      var geoData = LocalAppStorage.getGeoPosition();

      $scope.references = ActorReferences.getReferences($stateParams.shopId).then(function(data){
         return data;
       });

      var lat;
      var long;

      angular.forEach($scope.references,function(value, index){
      		if(value.idCg.idCg==68){
      			lat=value.latitudAr;
      			long=value.longitudAr;
      		}
      });

      var myLatlng = new google.maps.LatLng(geoData.lat,geoData.long);
      var pointLocal = new google.maps.LatLng(lat, long);
        
       var mapOptions = {
          center: myLatlng,
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP
       };
        var map = new google.maps.Map(document.getElementById("map"),mapOptions);

        var contentString = "<div><a ng-click='clickSaludo()'>Informaci&oacute;n !</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Posicion Actual'
        });

        directionsService = new google.maps.DirectionsService();
    	directionsDisplay = new google.maps.DirectionsRenderer({map: map});
    				
    	var marker = new google.maps.Marker({position: myLatlng,
      						title: "Posicion actual",
      						label: "Origen",
      						map: map
    					});
         var markerB = new google.maps.Marker({
      					position: pointLocal,
      					title: "Posicion del Local",
      					label: "Local",
      					map: map
    				});

         calculateAndDisplayRoute(directionsService, directionsDisplay, myLatlng, pointLocal);


        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        function calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB) {
  				directionsService.route({
    				origin: pointA,
    				destination: pointB,
    				travelMode: google.maps.TravelMode.DRIVING
  				}, function(response, status) {
    				if (status == google.maps.DirectionsStatus.OK) {
      						directionsDisplay.setDirections(response);
    				} else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}


});