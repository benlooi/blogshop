angular.module('controllers',[])
.controller('welcomeCtrl', function ($scope){
$scope.myInterval = 5000;
$scope.slides= [
{"image":"images/young-girl-shopping.jpg", "text":"Love.Shopping."},
{"image":"images/young-girl-shopping2.jpg","text":"Bags."},
{"image":"images/schuhe.jpg","text":"Shoes"},
{"image":"images/black-patent-shoes-with-bows.jpg","text":"Love.Shoes."},

];

})

.controller('blogshopCtrl', function ($scope, $http){

$http.get('assets/json/products.json')
.success(function(data){
$scope.products=data;
})
.error (function (err){

	console.log (err);
})
})