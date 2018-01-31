"use strict";

angular
  .module("WorldWideTravel")
  .controller("BookCtrl", function($scope, GuideFactory) {
    GuideFactory.getBooks().then(bookData => {
      $scope.bookList = bookData.data.guides;
    });
  });
