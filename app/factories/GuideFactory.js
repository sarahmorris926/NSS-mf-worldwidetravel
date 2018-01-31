'use strict';

angular.module("WorldWideTravel").factory("GuideFactory", function($q, $http) {
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
  return {getBooks};
})