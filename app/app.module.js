    (function () {
        'use strict';

        angular
            .module('app', ['ngAnimate', 'ngRoute'])
            .config(routeConfig);
        
        routeConfig.$inject = ['$routeProvider'];

        function routeConfig($routeProvider) {
            $routeProvider
                .when('/',{ templateUrl: 'app/people/people.html', title: 'people'})
                .when('/avengers',{ templateUrl: 'app/avengers/avengers.html', title: 'avengers'})
                .otherwise({ redirectTo: '/' });
        }
    })();
    (function () {
        'use strict';
    angular.module('app')
  .directive("scrollable", function() {
    return function(scope, element, attrs) {
      console.log(scope,element,attrs)  
      var container = angular.element(element);
      container.bind("scroll", function(evt) {
          if (container[0].scrollTop <= 0) {
              scope.vm.scrollSuperior();
              container[0].scrollTop = container[0].clientHeight+150
              scope.$digest();
          }
          if (container[0].offsetHeight + container[0].scrollTop >= container[0].scrollHeight) {
              scope.vm.scrollInferior();
              container[0].scrollTop = 10;
              scope.$digest();
          }
      });
    };
  })
  })();