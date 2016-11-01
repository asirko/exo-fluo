(function () {
  'use strict';

  angular
    .module('app.list')
    .factory('listService', recipesService);

  /* @ngInject */
  function recipesService($q, logger) {
    // that 'list' contains all ingredients first by ingredient's departement then by ingredient's name
    var list = {};

    var service = {
      addToList: addToList,
      getList: getList
    };

    return service;

    /**
     * Units of a same ingredient must correspond
     * @param recipe
     * @param currentServings
     * @returns {*|requestHandler|Promise}
       */
    function addToList(recipe, currentServings) {
      recipe.ingredients.forEach(function (ingredient){
        // first: retrieve the reference of the ingredient in the list (cf: the list is a 2 level list)
        if (!list[ingredient.department]) {
          list[ingredient.department] = {};
        }
        var ingredientsForDepartement = list[ingredient.department];
        if (!ingredientsForDepartement[ingredient.name]) {
          ingredientsForDepartement[ingredient.name] = {};
        }
        var ingredientInList = ingredientsForDepartement[ingredient.name];

        // then add or create the quantity
        if (ingredientInList.unit && ingredient.unit !== ingredientInList.unit) {
          logger.error('The unit of ' + ingredient.name + ' isn\'t corresponding, it hadn\'t been added to the list.');
        } else {
          ingredientInList.unit = ingredient.unit;
          ingredientInList.quantity = (ingredientInList.quantity || 0) + currentServings / recipe.servings * ingredient.quantity;
        }
      });
      return $q.when();
    }

    function getList() {
      return $q.when(list);
    }
  }
})();
