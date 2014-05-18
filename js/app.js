angular.module('MyApp', ['angular-carousel', 'ngRoute'])

.config(function($routeProvider, $locationProvider) {
 
  $routeProvider
  .when('/home', {
    templateUrl: 'view/home.html'
  })

  .when('/components', {
    templateUrl: 'view/components.html'
  })


  // configure html5 to get links working on jsfiddle
  //$locationProvider.html5Mode(true).hashPrefix('!');
});
