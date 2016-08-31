angular.module('starter.MapCtrl', [])

    .controller('MapCtrl', function($scope, $ionicLoading, $compile,LocalAppStorage,
                                    ActorReferences,$ionicPopup,Actor,$state,$timeout) {

     // google.maps.event.addDomListener(window, 'load', initialize);

      $scope.$parent.showHeader();
      $scope.$parent.clearFabs();
      $scope.isExpanded = false;
      $scope.$parent.setExpanded(false);
      $scope.$parent.setHeaderFab(false);
     
      
      function initialize() {

        var geoData = LocalAppStorage.getGeoPosition();

        $scope.allNearShops = [];
        $scope.nearShops = ActorReferences.getNearShops(geoData.long,geoData.lat,0.5).then(function(nearShops){
          $scope.nearShops1 =  nearShops;
          return nearShops;
        });
/*
        //console.log("dio click");

        var myLatlng = new google.maps.LatLng(geoData.lat,geoData.long);
        
        var mapOptions = {
          center: myLatlng,
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
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

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        var shopsNear = $scope.nearShops1;
        
        angular.forEach(shopsNear,function(value, index){
         
         
          var myLatlng1 = new google.maps.LatLng(value.latitudAr,value.longitudAr);
            
          var marker1 = new google.maps.Marker({
            position: myLatlng1,
            map: map,
            title: value.idAct.razonSocialAct
          });

          var contentString1 = "<div><a ng-click='clickLocal("+ value.idAct.idAct  + ")'>Local "+ value.idAct.razonSocialAct  +"!</a></div>";
          var compiled1 = $compile(contentString1)($scope);

          var infowindow1 = new google.maps.InfoWindow({
            content: compiled1[0]
          });

          google.maps.event.addListener(marker1,'click', function() {
              infowindow1.open(map,marker1);
          });
        
        }, this);

        
        $timeout(function () {
          $scope.maps = map;
        }, 300);

        */
      }// end initialize


      ionic.Platform.ready(function(){
        console.log("ready");
        initialize();
       
        // google.maps.event.addDomListener(window, 'load', initialize);
      });

      
      
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

      /* vactor = $scope.actor.then(function(data){
        return data;
       });
      */
       console.log($scope.actor);

       var vTemplate = 'Local cercano ' + $scope.actor.idAct;

       console.log(vTemplate);
        /**
        $ionicPopup.alert({
           title: 'Info',
           template: vTemplate
         });
         **/
      };

      // $state.go($state.current, {}, {reload: true});

      $scope.shareAnywhere = function(message, image, link) {
        $cordovaSocialSharing.share(message, image, link);    
      }
 
      $scope.shareViaTwitter = function(message, image, link) {
            $cordovaSocialSharing.shareViaTwitter(message, image, link).then(function(result) {

        }, function(error) {
            alert("Imposible compartir en Twitter");
        });
      }
      
      $scope.shareViaFb = function(message, image, link) {
            $cordovaSocialSharing.shareViaFacebook(message, image, link).then(function(result) {

        }, function(error) {
            alert("Imposible compartir en Facebook");
        });
      }
});
