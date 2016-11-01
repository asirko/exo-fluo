(function () {
    'use strict';

    angular
        .module('app.list')
        .controller('List', List);

    function List(listService) {
        var vm = this;
        vm.title = 'List of Selected ingredients';
        vm.isListEmpty = isListEmpty;

        activate();

        function activate() {
            vm.promiseToDisplay = _getList();
        }

        function _getList() {
            return listService.getList().then(function (data) {
                vm.list = data;
            });
        }

        function isListEmpty() {
            return !Object.keys(vm.list).length;
        }
    }
})();
