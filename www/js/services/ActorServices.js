'use strict';

angular.module('starter.ActorServices', [])
.factory('Actor', function($http, $rootScope, $q) {
  var actors;


  return {

    all: function() {
      return actors;
    },
    remove: function(id) {
      actors.splice(actors.indexOf(id), 1);
    },
    getActorById: function(actorId){

      var defered = $q.defer();
      actors = defered.promise;
      
      return $http.get($rootScope.restUrl+"com.somosglobal.rest.actor/"+actorId).success(function(data){
                console.log(data);
              actors =  defered.resolve(data);
      });

      return actors;
    }
  
  };

});