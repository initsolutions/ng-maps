var app=angular.module("App",["ngRoute","ngAnimate","ui.slider","ng-data-map","ngSanitize"]).config(["$locationProvider","$routeProvider",function($locationProvider,$routeProvider){$routeProvider.when("/map",{templateUrl:"templates/map.html"}).when("/marker",{templateUrl:"templates/marker.html"}).otherwise({redirectTo:"/map"})}]);angular.module("App").controller("control",["$scope",function(){}]),angular.module("App").controller("geopoints",["$scope",function(){}]),angular.module("App").controller("geopolygons",["$scope",function(){}]),angular.module("App").controller("infowindow",["$scope",function(){}]),angular.module("App").controller("Main",["$scope",function($scope){$scope.options=[{opt:"map",selected:!0},{opt:"marker",selected:!1},{opt:"points",selected:!1},{opt:"polygons",selected:!1},{opt:"geopoints",selected:!1},{opt:"geopolygons",selected:!1},{opt:"polylines",selected:!1},{opt:"shapes",selected:!1},{opt:"overlay",selected:!1},{opt:"control",selected:!1},{opt:"infowindow",selected:!1}],$scope.clearOptions=function(opt){for(var index=$scope.options.indexOf(opt),i=0;i<$scope.options.length;i++)$scope.options[i].selected=!1;$scope.options[index].selected=!0}}]),angular.module("App").controller("map",["$scope",function($scope){$scope.map={center:[39,-121],options:{zoom:4,streetViewControl:!1,scrollwheel:!1}},$scope.parameters=[{name:"center",type:"array",details:"An array of two numbers."},{name:"options",type:"object",details:"Object properties follow <a href='https://developers.google.com/maps/documentation/javascript/reference#MapOptions'>MapOptions object specification</a>"},{name:"events",type:"object",details:"Object properties follow <a href='https://developers.google.com/maps/documentation/javascript/reference#Map'>Map events specification</a>"}]}]),angular.module("App").controller("marker",["$scope",function($scope){$scope.map={center:[39,-121],options:{zoom:6,streetViewControl:!1,scrollwheel:!1}},$scope.marker={position:[39,-121],options:{draggable:!0}},$scope.parameters=[{name:"position",type:"array",details:"An array of two numbers."},{name:"lat",type:"float",details:"A numeric latitude value."},{name:"lng",type:"float",details:"A numeric longitude value."},{name:"round",type:"int",details:"Number of decimal places to round to when dragging"},{name:"options",type:"object",details:"Object properties follow <a href='https://developers.google.com/maps/documentation/javascript/reference#MapOptions'>MapOptions object specification</a>"},{name:"events",type:"object",details:"Object properties follow <a href='https://developers.google.com/maps/documentation/javascript/reference#Map'>Map events specification</a>"}]}]),angular.module("App").controller("overlay",["$scope",function(){}]),angular.module("App").controller("points",["$scope",function(){}]),angular.module("App").controller("polygons",["$scope",function(){}]),angular.module("App").controller("polylines",["$scope",function(){}]),angular.module("App").controller("shapes",["$scope",function(){}]);