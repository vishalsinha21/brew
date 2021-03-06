'use strict';

/* Controllers */

var brewControllers = angular.module('brewControllers', []);

brewControllers.controller('TopBrewListCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

  $http.get('brew/best').success(function (data) {
    $scope.brews = data;
    $scope.brew = $scope.brews[$routeParams.id];
  });

}]);

brewControllers.controller('CategoryListCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

  $http.get('brew/categories').success(function (data) {
    $scope.categories = data;
  });

}]);
