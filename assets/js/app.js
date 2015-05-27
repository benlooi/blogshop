angular.module('kssApp',['controllers','ui.router','ui.bootstrap'])
.config(function($stateProvider,$urlRouterProvider){

	$stateProvider
	.state('welcome', {
		url:"/welcome",
		templateUrl:"templates/welcome.html",
		controller: "welcomeCtrl"
 
	})
	.state('shop',{
		url:"/shop",
		abstract:true,
		templateUrl:"templates/shop.html",
	})
	.state('shop.accessories', {
		url:"/accessories",
		templateUrl:"templates/accessories.html",
		controller: "accessoriesCtrl"
	})
	.state('shop.posters', {
		url:"/posters",
		templateUrl:"templates/posters.html",
		controller: "postersCtrl"
	})
	.state('shop.others', {
		url:"/others",
		templateUrl:"templates/others.html",
		controller: "othersCtrl"
	})
	.state('shop.customerfeedback', {
		url:"/customerfeedback",
		templateUrl:"templates/customerfeedback.html",
		controller: "feedbackCtrl"
	});
	
$urlRouterProvider.otherwise('/welcome');
});