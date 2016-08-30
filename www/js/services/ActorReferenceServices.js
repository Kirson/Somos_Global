'use strict';

angular.module('starter.ActorReferenceServices', [])
.factory('ActorReferences', function($http, $rootScope) {
  var references;


  return {

    all: function() {
      return references;
    },
    remove: function(id) {
      references.splice(references.indexOf(id), 1);
    },
    get: function(shopId) {
      for (var i = 0; i < references.length; i++) {
        if (references[i].id === parseInt(shopId)) {
          return references[i];
        }
      }
      return null;
    },
    getReferences: function(shopId){
        return $http.get($rootScope.restUrl+"com.somosglobal.rest.actorreferencia/actor/"+shopId
              ).then(function(response){
                //console.log(response.data);
                references = response.data;
                return references;
      });
    },
    getNearShops: function(longitude,latitude,distance){
        return $http.get($rootScope.restUrl+"com.somosglobal.rest.actorreferencia/searchNearShop/"+longitude+"/"+latitude+"/"+distance
              ).then(function(response){
                //console.log(response.data);
                references = response.data;
                return references;
      });
    },
    getActorReferenceByActorIdAndCatalogo: function(actorId){
        return $http.get($rootScope.restUrl+"com.somosglobal.rest.actorreferencia/actorIdAndCatalogo/"+actorId+"/68"
              ).then(function(response){
                //console.log(response.data);
                references = response.data;
                return references;
      });
    }

  };

});
