var app = angular.module("ranjith", ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/homelink', {
			templateUrl: 'templates/home.html',
			controller: 'homeController'
		})
		.when('/aboutlink', {  
			templateUrl: 'templates/about.html',
			controller: 'aboutController'
		})
	.when('/serviceslink', {
			templateUrl: 'templates/services.html',
			controller: 'servicesController'
		})
	.when('/contactlink', {
			templateUrl: 'templates/contact.html',
			controller: 'servicesController'
		})		
		.otherwise({
			redirectTo: '/view1'
		});
});