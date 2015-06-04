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
});
$scope.cart=[];
$scope.addToCart= function(index){
	if($scope.cart.length == 0){
	$scope.cart.push($scope.products[index]);
	console.log($scope.cart);
	}else{
	var itemsincart = $scope.cart.map(function(item){
		
		var productname = item.productname;
		return productname;
	});
	var a = itemsincart.indexOf($scope.products[index].productname);
	if(a==-1){
		$scope.cart.push($scope.products[index]);
	}else{
	$scope.cart[a].qty +=1;
	}
	
	}

	$scope.showTotalPrice();
};

$scope.showTotalPrice = function(){
	$scope.totalprice = 0;

	for(i=0;i<$scope.cart.length;i++){
		var itemprice = $scope.cart[i].price * $scope.cart[i].qty;
		$scope.totalprice += itemprice;
	}
};


$scope.emptyCart = function(){
	$scope.totalprice= 0;
	$scope.cart=[];
};

$scope.removeItem = function(index){
	if($scope.cart[index].qty!=1){
	$scope.cart[index].qty -= 1;
	}else{
	$scope.cart.splice(index,1);
	}
$scope.showTotalPrice();
};
})

.controller('postersCtrl', function ($scope, $http){

$http.get('assets/json/posters.json')
.success(function(data){
$scope.posters=data;
console.log(data);
})
.error (function (err){

	console.log (err);
});

$scope.cart=[];
$scope.addToCart=function(index1){
	if ($scope.cart.length == 0){
		$scope.cart.push($scope.posters[index1]);
		console.log($scope.cart);
	} else {
		var postersincart = $scope.cart.map(function(poster){
			var productname = poster.productname;
			return productname;
		});
		var b = postersincart.indexOf($scope.posters[index1].productname);
		if (b== -1){
			$scope.cart.push($scope.posters[index1]);
		} else {
			$scope.cart[b].qty +=1;
		}
	}
	$scope.showTotalPrice();
};
	$scope.showTotalPrice= function(){
		$scope.totalprice=0;
		for(i=0; i<$scope.cart.length; i++){
			var posterprice = $scope.cart[i].price * $scope.cart[i].qty;
			$scope.totalprice += posterprice;
		}
	};

$scope.emptyCart = function(){
	$scope.totalprice = 0;
	$scope.cart=[];
};

$scope.removeItem = function(index1){
	if($scope.cart[index1].qty!=1){
		$scope.cart[index1].qty -=1;
	} else {
		$scope.cart.splice(index1,1);
	}
$scope.showTotalPrice();
};
})

.controller('othersCtrl', function ($scope, $http){

$http.get('assets/json/others.json')
.success(function(data){
$scope.others=data;
console.log(data);
})
.error (function (err){

	console.log (err);
});

$scope.cart=[];
$scope.addToCart=function(index2){
	if($scope.cart.length ==0){
		$scope.cart.push($scope.others[index2]);
		console.log($scope.cart);
	} else {
		var othersincart = $scope.cart.map(function(thing){
			var productname = thing.productname;
			return productname;
		});
		var c = othersincart.indexOf ($scope.others[index2].productname);
		if (c== -1){
			$scope.cart.push($scope.others[index2]);
		} else {
			$scope.cart[c].qty +=1;
		}
	}

	$scope.showTotalPrice();
};
	$scope.showTotalPrice = function() {
		$scope.totalprice=0;
		for(i=0; i<$scope.cart.length;i++){
			var thingprice = $scope.cart[i].price * $scope.cart[i].qty;
			$scope.totalprice += thingprice;
		}
	};
	
$scope.emptyCart = function(){
	$scope.totalprice = 0;
	$scope.cart=[];
};

$scope.removeItem = function(index2){
	if($scope.cart[index2].qty!=1){
		$scope.cart[index2].qty -=1;
	} else {
		$scope.cart.splice(index2,1);
	}

$scope.showTotalPrice();
};
});