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

.controller('accessoriesCtrl', function ($scope, $http){

$http.get('assets/json/products.json')
.success(function(data){
$scope.products=data;
console.log(data);
})
.error (function (err){

	console.log (err);
})
})

.controller('postersCtrl', function ($scope, $http){

$http.get('assets/json/posters.json')
.success(function(data){
$scope.posters=data;
console.log(data);
})
.error (function (err){

	console.log (err);
})
})

.controller('othersCtrl', function ($scope, $http){

$http.get('assets/json/others.json')
.success(function(data){
$scope.others=data;
console.log(data);
})
.error (function (err){

	console.log (err);
})
});