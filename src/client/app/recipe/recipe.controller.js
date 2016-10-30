(function () {
  'use strict';

  angular
    .module('app.recipe')
    .controller('Recipe', Recipe);

  function Recipe(recipesService, logger, $stateParams) {
    var vm = this;
    vm.title = 'Recipe of';
    vm.getCurrentQuantity = getCurrentQuantity;

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
  }
})();
