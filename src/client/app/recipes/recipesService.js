(function () {
  'use strict';

  angular
    .module('app.recipes')
    .factory('recipesService', recipesService);

  /* @ngInject */
  function recipesService($http, $location, exception, logger, $q) {

    var service = {
      getRecipes: getRecipes,
      getRecipe: getRecipe
    };

    return service;

    function getRecipe(id) {
      var deferred = $q.defer();
      getRecipes()
        .then(_extractRecipe);

      return deferred.promise;

      /**
       * put the recipe into a resolve promise
       * reject the promise if there is no recipe corresponding
       * @param recipes
       * @private
         */
      function _extractRecipe(recipes) {
        var recipe;
        recipes.forEach(function (currentRecipe) {
          if (currentRecipe.recipe_id === +id) {
            recipe = currentRecipe;
          }
        });

        if (recipe) {
          deferred.resolve(recipe);
        } else {
          logger.error('No recipe found with the id:' + id);
          deferred.reject()
        }
      }
    }

    function getRecipes() {
      return $http.get('/api/recipes')
        .then(_returnData)
        .catch(_failed);

      function _failed(e) {
        $location.url('/');
        logger.error('XHR Failed for getRecipes' + e);
        return exception.catcher('XHR Failed for getRecipes')(e);
      }
    }

    function _returnData(data) {
      return data.data;
    }
  }
})();
