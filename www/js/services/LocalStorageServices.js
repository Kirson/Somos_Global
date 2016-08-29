angular.module('LocalStorageServices', [])

.service('LocalAppStorage', function() {

  var setGeoPosition = function(geo_data) {
    window.localStorage.starter_geo_position = JSON.stringify(geo_data);
  };

  var getGeoPosition = function(){
    return JSON.parse(window.localStorage.starter_geo_position || '{}');
  };

  return {
    getGeoPosition: getGeoPosition,
    setGeoPosition: setGeoPosition
  };
});
