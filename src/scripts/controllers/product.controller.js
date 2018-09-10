angular.module('product.controllers', []).controller("ProductController", _productController)

function _productController($scope) {
	$scope.products = [
		{
			img: 'http://mikemoir.com/mikemoir/wp-content/uploads/2015/06/MedRes_Product-presentation-2.jpg',
			name: 'AAA',
			price: '1000'
		},
		{
			img: 'http://mikemoir.com/mikemoir/wp-content/uploads/2015/06/MedRes_Product-presentation-2.jpg',
			name: 'AAA',
			price: '1000'
		},
		{
			img: 'http://mikemoir.com/mikemoir/wp-content/uploads/2015/06/MedRes_Product-presentation-2.jpg',
			name: 'AAA',
			price: '1000'
		}
	]
}
