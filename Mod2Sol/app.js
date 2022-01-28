(function(){
    'use strict'

     angular.module('CheckerApp', [])
    .controller('MyApp', shoppingListToBuyController)
    .controller('MyApp', shoppingListAlreadyBoughtController)
    .service('ShoppingListService', ShoppingListService);

    shoppingListToBuyController.$inject = ['ShoppingListService'];
    function  ShoppingListAddController(ShoppingListService) {

    }

    shoppingListAlreadyBoughtController.inject = ['ShoppingListService'];
    function shoppingListAlreadyBoughtController(ShoppingListService) {

    }

    function ShoppingListService() {
        
    }
})();