angular.module('main.controllers', []).controller("MainController", _mainController)

function _mainController($scope) {
	$scope.message = 'Hello FullStack';
	$scope.menu = [
		{
			name: "Menu1",
			link: "http://mikemoir.com/mikemoir/wp-content/uploads/2015/06/MedRes_Product-presentation-2.jpg"
		},
		{
			name: "Menu2",
			link: "https://static.acer.com/up/Resource/Acer/Home/Product_Highlights/20180112/swift_5.png"
		},
		{
			name: "Menu3",
			link: "https://sc01.alicdn.com/kf/HTB1DvkOKpXXXXXQXVXXq6xXFXXXK/Thin-Film-Amorphous-Silicon-Photovoltaic-Solar-Module.jpg"
		},
		{
			name: "Menu4",
			link: "http://demo.ajax-cart.com/photos/product/4/176/4.jpg"
		}
	]
}
