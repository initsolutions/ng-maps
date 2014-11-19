angular.module('ngMaps')
  .directive('points', ['MapObjects', function(MapObjects) {
    return {
      restrict: 'E',
      scope: {
        coords: '=',        // array []
        options: '=',       // function() { return {} }
        properties: '=',    // array [{}, {}]
        events: '=',        // object {event:function(), event:function()}
        visible: '=',       // boolean
        decimals: '='       // int
      },
      require: '^map',
      link: function($scope, $element, $attrs, parent) {

        $scope.$watch(function() {
          parent.getMap();
        }, function() {

          var map = parent.getMap();

          var points = [];

          var round = function(val) {
            if ($scope.decimals || $scope.decimals === 0) {
              return Math.round(Math.pow(10, $scope.decimals) * val) / Math.pow(10, $scope.decimals);
            } else {
              return val;
            }
          };

          $scope.$watch('coords', function() {
            newCoords($scope.coords);
          });

          $scope.$watch('visible', function() {
            angular.forEach(points, function(p) {
              p.setVisible($scope.visible);
            });
          });

          $scope.$watch('options', function() {
            angular.forEach(points, function(p, i) {
              p.setOptions($scope.options(p, map, i, MapObjects));
            });
          });

          var newCoords = function(coords) {

            angular.forEach(points, function(p) {
              p.setMap(null);
            });

            points = [];

            angular.forEach(coords, function(c, i) {

              var opts = $scope.options ? $scope.options(c, i, map, MapObjects) : {};
              opts.position = new google.maps.LatLng(c[0], c[1]);
              opts.map = map;
              var point = new google.maps.Marker(opts);

              angular.forEach($scope.events, function(val, key) {
                google.maps.event.addListener(point, key, function(e) {
                  val(e, this, MapObjects);
                });
              });

              google.maps.event.addListener(point, "drag", function() {
                $scope.$apply(function() {
                  var lat = round(point.getPosition().lat());
                  var lng = round(point.getPosition().lng());
                  $scope.coords[i] = [lat, lng];
                });
              });

              points.push(point);

            });

          };



        });

      }
    };
  }]);