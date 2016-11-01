(function () {
    'use strict';

    angular
        .module('app.recipe')
        .controller('Recipe', Recipe);

    function Recipe(recipesService, $stateParams, listService, logger, $q) {
        var vm = this;
        vm.getCurrentQuantity = getCurrentQuantity;
        vm.addToList = addToList;
        vm.promiseToDisplay = $q.when();

        activate();

        function activate() {
            vm.promiseToDisplay = _getRecipe();
        }

        function _getRecipe() {
            return recipesService.getRecipe($stateParams.id).then(function (data) {
                vm.recipe = data;
                vm.currentServings = data.servings;
            });
        }

        function getCurrentQuantity(ingredient) {
            return vm.currentServings / vm.recipe.servings * ingredient.quantity;
        }

        function addToList() {
            vm.promiseToDisplay = listService.addToList(vm.recipe, vm.currentServings)
                .then(function () {
                    logger.success('Ingredients added to the list');
                });
        }
    }
})();
