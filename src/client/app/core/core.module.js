(function () {
    'use strict';

    angular
        .module('app.core', [
            /* Angular modules */
            'ngAnimate',
            'ngSanitize',
            /* Cross-app modules */
            'blocks.diagnostics',
            'blocks.exception',
            'blocks.logger',
            'blocks.router',
            'blocks.filter',
            /* 3rd-party modules */
            'ui.router',
            'ngplus',
            'cgBusy'
        ]);

})();
