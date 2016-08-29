angular.module('starter.MapCtrl', [])

    .controller('MapCtrl', function($scope, $ionicLoading, $compile,LocalAppStorage,ActorReferences) {

      google.maps.event.addDomListener(window, 'load', initialize);

      var geoData = LocalAppStorage.getGeoPosition();
      
      function initialize() {

        

        console.log("geoData");
        console.log(geoData);

        var myLatlng = new google.maps.LatLng(geoData.lat,geoData.long);
        
        var mapOptions = {
          center: myLatlng,
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("maps"),
            mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Posicion Actual'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        $scope.maps = map;
      }// end initialize


      ionic.Platform.ready(function(){
        console.log("ready");
        initialize();
        // google.maps.event.addDomListener(window, 'load', initialize);
      });

      
      
      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
      };

      console.log( "References 1" );
      $scope.nearShops1 = [];
      $scope.nearShops = ActorReferences.getNearShops(geoData.long,geoData.lat,100000).then(function(nearShops){
      $scope.nearShops1 =  nearShops;
        console.log( "References" );
         console.log(  $scope.nearShops1 );
      
    });
      
});
