angular.module('kssApp',['controllers','ui.router','ui.bootstrap'])
.config(function($stateProvider,$urlRouterProvider){

	$stateProvider
	.state('welcome', {
		url:"/welcome",
		templateUrl:"templates/welcome.html",
		controller: "welcomeCtrl"
 
	});
	.state('blogshop', {
		url:"/blogshop",
		templateUrl:"templates/blogshop.html",
		controller: "blogshopCtrl"
 
	})
	.state('survey', {
		url:"/survey",
		templateUrl:"templates/survey.html",
		controller: "surveyCtrl"
 
	});
	


$urlRouterProvider.otherwise('/welcome');
});