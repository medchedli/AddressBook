var ContactApp = angular.module('ContactApp', [
  'ngRoute',
	'ngMap',
  'contactControllers'
]);

ContactApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'templates/list.html',
    controller: 'ListController'
  }).
  when('/details/:itemId', {
    templateUrl: 'templates/details.html',
    controller: 'DetailsController'
  }).
	when('/locate', {
    templateUrl: 'templates/locate.html',
    controller: 'MapsController'
  }).
	when('/form', {
    templateUrl: 'templates/form.html',
    controller: 'FormController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);