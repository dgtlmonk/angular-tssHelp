var app = angular.module('tssHelp',['ui.router','ngSanitize']);

angular.module('tssHelp').config( function ($stateProvider, $urlRouterProvider){
        $stateProvider
        .state('home',{
                url:'',
                templateUrl:'partials/home/home.html'
        });
})

.run(function($rootScope){
 console.log('app bootstrapped');
});
