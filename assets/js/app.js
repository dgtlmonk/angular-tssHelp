var app = angular.module('tssHelp',['ui.router','ngSanitize']);

angular.module('tssHelp').config( function ($stateProvider, $urlRouterProvider){
        $stateProvider
        .state('home',{
                url:'',
                templateUrl:'partials/home/home.html'
        })
         .state('ad types',{
                url:'/ad-types',
                templateUrl:'partials/ad-types/ad-types.html'
        });

})

.run(function($rootScope){
 console.log('app bootstrapped');
});
