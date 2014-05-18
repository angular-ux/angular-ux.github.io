angular.module('MyApp', ['angular-carousel', 'ngRoute', 'ngAnimate'])

.config(function($routeProvider, $locationProvider) {
 
  $routeProvider
  .when('/home', {
    templateUrl: 'view/home.html'
  })

  .when('/components', {
    templateUrl: 'view/components.html'
  })
   
  .otherwise({redirectTo: 'home'});


  // configure html5 to get links working on jsfiddle
  //$locationProvider.html5Mode(true).hashPrefix('!');
});

