(function () {
    'use strict';

    angular
        .module('app.recipes')
        .controller('Recipes', Recipes);

    /* @ngInject */
    function Recipes(recipesService, $log, $state) {
        var vm = this;
        vm.recipes = [];
        vm.goToRecipe = goToRecipe;

        activate();

        function activate() {
            vm.promiseToDisplay = _getRecipes();
        }

        function _getRecipes() {
            return recipesService.getRecipes().then(function (data) {
                vm.recipes = data;
            });
        }

        function goToRecipe(recipeId) {
            $log.info('routing to recipe :' + recipeId);
            $state.go('recipe', {
                id: recipeId
            });
        }
    }
})();
