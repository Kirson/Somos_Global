angular.module('starter.MapShopCtrl', [])

    .controller('MapShopCtrl', function($scope, $ionicLoading, $compile,LocalAppStorage,$q,
                                        ActorReferences,$ionicPopup,Actor,$state,$timeout,$stateParams) {


    	$scope.$parent.showHeader();
    	$scope.$parent.clearFabs();
    	$scope.isExpanded = false;
    	$scope.$parent.setExpanded(false);
    	$scope.$parent.setHeaderFab(false);

      var geoData = LocalAppStorage.getGeoPosition();
      $scope.actorReferenciaData;
      $scope.references = ActorReferences.getActorReferenceByActorIdAndCatalogo($stateParams.shopId).then(function(data){
      var lat = data.latitudAr;
      var long = data.longitudAr;

      var myLatlng = new google.maps.LatLng(geoData.lat,geoData.long);
      var pointLocal = new google.maps.LatLng(lat, long);
        
       var mapOptions = {
          center: myLatlng,
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP}        
       ;
      var map = new google.maps.Map(document.getElementById("map"),mapOptions);
      var marker =new google.maps.Marker({
          position:myLatlng,
          title: "Mi Posici&oacute;n",
          label: "Mi ubicaci&oacute;n",
          map: map
      });

      var markerB = new google.maps.Marker({
                position: pointLocal,
                title: "Posici&oacute;n del Local",
                label: "Local",
                map: map
      });

      var infowindow = new google.maps.InfoWindow({
        content: "Mi ubicaci&oacute;n",
      });
      var infowindowLocal = new google.maps.InfoWindow({
        content:data.idAct.razonSocialAct
      });
      

      google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
      });
      google.maps.event.addListener(markerB, 'click', function() {
          infowindowLocal.open(map,markerB);
      });
      // marker.setMap(map);
      // markerB.setMap(map);

        

       });






});