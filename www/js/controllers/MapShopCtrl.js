angular.module('starter.MapShopCtrl', [])

    .controller('MapShopCtrl', function($scope, $ionicLoading, $compile,LocalAppStorage,$q,
                                        ActorReferences,$ionicPopup,Actor,$state,$timeout,$stateParams) {


    	$scope.$parent.showHeader();
    	$scope.$parent.clearFabs();
    	$scope.isExpanded = false;
    	$scope.$parent.setExpanded(false);
    	$scope.$parent.setHeaderFab(false);

      var geoData = LocalAppStorage.getGeoPosition();
      $scope.references = ActorReferences.getActorReferenceByActorIdAndCatalogo($stateParams.shopId).then(function(data){
        console.log(" data: "+ data);
      	 return data;
       });


      console.log("lat");console.log($scope.references);
      console.log("lat");console.log($scope.references.latitudAr);
      console.log("long");console.log($scope.references.longitudAr);

      var lat = $scope.references.latitudAr;
      var long = $scope.references.longitudAr;
       /*
      console.log("$scope.references1");
      console.log($scope.references);
      var value0 = $scope.references.$$state;
      	console.log("value0");
      	console.log(value0);
      	console.log(value0.status);
      	var va1 = value.then(function(status,value){return value});

      $scope.references = $scope.references.then(function(state,value){return value});
      //$scope.references = $scope.references.then(function (data){return data});
      //$scope.references = JSON.parse($scope.references);

       console.log("$scope.references2");
      console.log($scope.references);

      console.log("$scope.references3");
      $scope.references = $scope.references.$$state;
      console.log($scope.references);
      console.log("$scope.references.value");
      console.log($scope.references.value);
	*/

      angular.forEach($scope.references,function(actorReferencia){
      	/*
      	console.log("actorReferencia");
      	console.log(actorReferencia);
      	var value1 = actorReferencia;
      	console.log("value1");
      	console.log(value1);
      	var value2 = actorReferencia.$$state.value;
      	console.log("value2");
      	console.log(value2);
		*/
      	   angular.forEach(actorReferencia.data,function(val){
      	   	 console.log("val"); console.log(val);
      		/*if(val.idCg.idCg==68){
      			lat=val.latitudAr;
      			long=val.longitudAr;
      		}*/
      	});
      });

      var myLatlng = new google.maps.LatLng(geoData.lat,geoData.long);
      var pointLocal = new google.maps.LatLng(lat, long);

      console.log("Device:");
      console.log("lat");console.log(geoData.lat);
      console.log("long");console.log(geoData.long);
      console.log("Local:");
      console.log("lat");console.log(lat);
      console.log("long");console.log(long);
        
       var mapOptions = {
          center: myLatlng,
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP}        
       ;
      var map = new google.maps.Map(document.getElementById("map"),mapOptions);
      var marker =new google.maps.Marker({
          position:myLatlng
          // icon:'pinkball.png'
      });

        
        var markerB = new google.maps.Marker({
                position: pointLocal
                // title: "Posicion del Local",
                // label: "Local",
                // map: map
            });
      marker.setMap(map);
      markerB.setMap(map);

        var contentString = "<div><a ng-click='clickSaludo()'>Informaci&oacute;n !</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        


        // var marker = new google.maps.Marker({
        //   position: myLatlng,
        //   // map: map,
        //   title: 'Posicion Actual',
        //   label: "Origen"
        // });

      			
    	google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        var infowindow1 = new google.maps.InfoWindow({
          content: compiled[0]
        });

         google.maps.event.addListener(markerB, 'click', function() {
          infowindow1.open(map,markerB);
        });	

        var directionsService = new google.maps.DirectionsService();
    	var directionsDisplay = new google.maps.DirectionsRenderer();
    

         //calculateAndDisplayRoute(directionsService, directionsDisplay, myLatlng, pointLocal,map);

         directionsService.route({
    			origin: myLatlng,
    			destination: pointLocal,
    			travelMode: google.maps.TravelMode.DRIVING
  			}, function(response, status) {
    			if (status == google.maps.DirectionsStatus.OK) {
      						directionsDisplay.setDirections(response);
      						directionsDisplay.setMap(map);
      					
      						console.log("1111");
    			}else{
      				
      				console.log("2222 " + status);
    			}
  			});

         google.maps.event.addListenerOnce(directionsDisplay, 'directions_changed', 
   			function(){
   				var waypoints=directionsDisplay.getDirections().routes[0]
                    .legs[0].via_waypoints||[];
    			for(var i=0;i<waypoints.length;++i){
       				waypoints[i]={stopover:true,location: waypoints[i]}
    			}
    			route(waypoints);
		});

         $scope.map=map;

        

        $scope.clickSaludo = function() {
        $ionicPopup.alert({
           title: 'Info',
           template: 'Esta es su ubicaci&oacute;n actual '
         });
      };

      $scope.clickLocal = function(vId) {
        var vactor = "";
        $scope.actor = Actor.getActorById(vId).then(function(actor){
          console.log(actor);
          $scope.actor =  actor;
        });
       console.log($scope.actor);
       var vTemplate = 'Local cercano ' + $scope.actor.idAct;
       console.log(vTemplate);
      };


       function calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB, map) {
  			directionsService.route({
    			origin: pointA,
    			destination: pointB,
    			travelMode: google.maps.TravelMode.DRIVING
  			}, function(response, status) {
    			if (status == google.maps.DirectionsStatus.OK) {
      						directionsDisplay.setDirections(response);
      						directionsDisplay.setMap(map);
      						window.alert('Ingresa ??');
    			}else{
      				window.alert('Directions request failed due to ' + status);
    			}
  			});
		};

});