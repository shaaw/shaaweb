var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($httpProvider) {
  $httpProvider.defaults.withCredentials = true;
});


app.directive('ngConfirmClick', [
  function(){
    return {
      link: function (scope, element, attr) {
        var msg = attr.ngConfirmClick || "Are you sure?";
        var clickAction = attr.confirmedClick;
        element.bind('click',function (event) {
          if ( window.confirm(msg) ) {
            scope.$eval(clickAction);
          }
        });
      }
    };
  }]);



  app.controller('mainController', function($scope,$http){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();



  });
