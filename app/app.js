'use strict';

angular.module("WorldWideTravel", ['ngRoute'])
.config($routeProvider => {
  $routeProvider
  .when("/", {
    templateUrl: "partials/guide-list.html",
    controller: "BookCtrl"
  });
});
