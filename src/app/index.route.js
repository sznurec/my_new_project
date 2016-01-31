(function() {
  'use strict';

  angular
    .module('myNewProject')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('about', {
      url:'/about',
      templateUrl:'app/main/main.html',
      controller:'MainController',
      controllerAs:'main',
      })

      .state('contact',{
        url:'/contact',
        templateUrl:'app/myModule/myTemplate.html',
        controller:'myController',
        controllerAs:'ctrl',

      })

       .state('user.detail', {
       url: '/user/login',
      resolve:{
       promiseObj2:  function($http){
            return $http({method: 'GET', url: 'https://api.github.com/users/login'})
               .then (function (data) {
                   return doSomeStuffFirst(data);
               });
         },        
    
    },
    
         
        controller: 'myController',
        controllerAs: 'ctrl',
    })
    
      ;


    $urlRouterProvider.otherwise('/');
  }

})();
