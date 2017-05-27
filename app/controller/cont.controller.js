(function () {
    'use strict';

    angular
        .module('app')
        .controller('TableController', TableController);

    TableController.$inject = ['peopleService'];

    function TableController(peopleService) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Registros';
        vm.people = [];
        vm.activate = activate;
        var inicio = 0
        var numeroRegistros = 20;
        vm.scrollSuperior = function(){
            inicio = inicio - 20;
            vm.tabla = vm.registros.slice(inicio,numeroRegistros+inicio);
        }

        vm.scrollInferior = function(){
                inicio = inicio + 20;
                vm.tabla = vm.registros.slice(inicio,numeroRegistros+inicio);
        }
        activate();

        function activate() {
            vm.registros = peopleService.getAll();
            vm.tabla = vm.registros.slice(inicio,numeroRegistros);
        }
    }
})();