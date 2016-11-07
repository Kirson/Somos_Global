'use strict';

angular.module('starter.PointsServices', [])
.factory('Points', function($http, $rootScope ) {
  var users = null;
  
  return {

    all: function() {
      return shops;
    },
    remove: function(id) {
      
    },
    // newPointsByActor: function(usuario){
    //      return $http.post($rootScope.restUrl+"com.somosglobal.rest.puntosactor/",
    //     usuario
    //     ).then(function(response){
    //       console.log(response.data);
    //       users = response.data;
    //       return users;
    //   });
    // },

    
    getPuntosActorByNumDocumentoActor: function(numDocumentoActor){
        return $http.get($rootScope.restUrl+"com.somosglobal.rest.puntosactor/"+numDocumentoActor
              ).then(function(response){
                // console.log(response.data);
                return response.data;
      });
    },
    transferPuntosActorByNumDocumentoActor: function(numDocumentoActor,numDocumentoActor2,valor){
        return $http.get($rootScope.restUrl+"com.somosglobal.rest.puntosactor/transfer/"+numDocumentoActor+"/"+numDocumentoActor2+"/"+valor
              ).then(function(response){
                // console.log(response.data);
                return response.data;
      });
    }
    
  };
});

