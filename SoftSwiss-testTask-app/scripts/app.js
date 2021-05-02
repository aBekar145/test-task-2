let app = angular.module("testTask", []);

app.controller('productsCtrl', function ($scope) {
	$scope.data = {
		"items": [
		{
			"type" : "Child",
			"img" : "images/img/1-t-shirt-img.png",
			"price" : "3.20",
			"name" : "T-SHIRT",
			"options": ["Size", "S", "M", "L", "XL"]
		}
		,{
			"type" : "Child",
			"img" : "images/img/2-pants-forclas-img.png",
			"price" : "13.30",
			"name" : "Pants FORCLAZ",
			"options": ["Size", "M", "XL"]
		}
		,{
			"type" : "Men",
			"img" : "images/img/1-t-shirt-img.png",
			"price" : "5.00",
			"name" : "T-SHIRT",
			"options": ["Size", "XL"]
		}
		,{
			"type" : "Women",
			"img" : "images/img/2-pants-forclas-img.png",
			"price" : "3.21",
			"name" : "T-SHIRT",
			"options":  ["Size", "S", "M", "L", "XL"]
		}
		,{
			"type" : "Women",
			"img" : "images/img/3-backpack-img.png",
			"price" : "31",
			"name" : "backpack",
			"options": ["color", "red", "blue", "black"]
		}
		, {
			"type" : "Other",
			"img" : "images/img/3-backpack-img.png",
			"price" : "0",
			"name" : "car",
			"options": ["color", "red", "blue", "black"]
		}
  	]
	};
	console.log($scope.data["items"]["options"]);

	$scope.showCategory = {
		"Men" : true,
		"Women" : true,
		"Child": true
	};

	$scope.typeClothes = [
		{name: "Men"},
		{name: "Women"},
		{name: "Child"},
	]

	$scope.changeFilter  = function (data) {
		return $scope.showCategory[data.type];
	}

	// $scope.changeFilter  = function (obj) {
	// 	return !$scope.showCategory[obj];
	// }

	$scope.sortByName = function(data) {
		$scope.showCategory = data;
	}

});


app.controller('menuCtrl', ['$scope', function ($scope) {

	$scope.data = {
		"footerMenu" : [
			{
				"name": "Credits",
				"link": "https://softswiss.com/",
				"title": "credits"
			},
			{
				"name": "Privacy",
				"link": "https://softswiss.com/",
				"title": "privacy"
			},
			{
				"name": "About",
				"link": "https://www.softswiss.com/about-us/",
				"title": "about us"
			},
			{
				"name": "Contact",
				"link": "https://www.softswiss.com/contact-us/",
				"title": "contact us"
			}
		]};

}]);