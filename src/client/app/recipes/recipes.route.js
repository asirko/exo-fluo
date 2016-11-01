(function () {
    'use strict';

    angular
        .module('app.recipes')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'recipes',
                config: {
                    url: '/',
                    templateUrl: 'app/recipes/recipes.html',
                    controller: 'Recipes',
                    controllerAs: 'vm'
                }
            }
        ];
    }

})();
