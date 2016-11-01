(function() {
    'use strict';

    angular
        .module('app.list')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'list',
                config: {
                    url: '/list',
                    templateUrl: 'app/list/list.html',
                    controller: 'List',
                    controllerAs: 'vm'
                }
            }
        ];
    }
})();
