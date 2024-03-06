var shopApp = angular.module('shopApp', ['ngRoute']);

shopApp.controller('mainController',function($rootScope,$scope,$http){

    $rootScope.loggedUser = JSON.parse(localStorage.getItem('loggedUser')) || {};
    
$http({
    method:'GET',
    url:'https://jsonplaceholder.typicode.com/photos'
}).then(function(data){
    console.log(data);
})

    $scope.logout = function(){
        $rootScope.loggedUser = {};
        localStorage.removeItem('loggedUser')
    }
});