(function() {
    'use strict';

    angular
        .module('app.recipe')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'recipe',
                config: {
                    url: '/recipe/:id',
                    templateUrl: 'app/recipe/recipe.html',
                    controller: 'Recipe',
                    controllerAs: 'vm'
                }
            }
        ];
    }
})();
