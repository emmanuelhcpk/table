(function () {
    'use strict';

    angular
        .module('app')
        .factory('peopleService', peopleService);

    function peopleService() {
        var service = {
            getAll: getAll
        };

        return service;
        
        function getAll() {
            var array = []
            for(var i = 0; i< 2000;i++){
                array.push({first: 'test'+i, last: 'test'+i, lunchMoney: 12+i})
            }
            return array;

        }
    }
})();