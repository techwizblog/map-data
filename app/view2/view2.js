'use strict';

angular.module('myApp.view2', ['ngRoute', 'leaflet-directive'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ["$scope", "$http", "leafletData", function($scope, $http, $leafletData) {
  $http.get("http://localhost:8081/api/geelongbiketracks").success(function(data, status) {
    angular.extend($scope, {
      geojson: {
        data: data,
        style: {
          fillColor: "green",
          weight: 2,
          opacity: 1,
          color: 'blue',
          dashArray: '3',
          fillOpacity: 0.7
        }
      }
    });
  });

  angular.extend($scope, {
    ballarat: {
      lat: -38.1481049,
      lng: 144.3453713,
      //lat: 27.26,
      //lng: 78.86,
      zoom: 10
    },
    defaults: {
      scrollWheelZoom: false
    }
  });

}]);