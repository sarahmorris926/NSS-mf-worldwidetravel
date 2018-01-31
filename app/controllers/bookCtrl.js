'use strict';

angular.module("WorldWideTravel").controller("BookCtrl", function($scope, $q, $http) {

  let getBooks = () => {
    return $q((resolve, reject) => {
      $http
      .get("../../data/guides.json")
      .then((bookInfo) => {
        
        resolve(bookInfo)
      })
      .catch( error => {
        reject(error)
      });
    });
  };

  getBooks()
  .then( bookData => {
    $scope.bookList = bookData.data.guides;
  });

});
