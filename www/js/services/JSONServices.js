angular.module('JSONServices', [])

.factory('JSONServices', function($resource) {
  return $resource('events.json', {}, {
    query: {
      method: 'GET',
      transformResponse: function(data) {
        return angular.fromJson(data).events;
      },
      isArray: true
    }
  });
});