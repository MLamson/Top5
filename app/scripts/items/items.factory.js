;(function (){
  
  'use strict';

  angular.module('Top5')

  .factory('ItemsFactory', ['$http', 'PARSE', 'UserFactory',

    function ($http, PARSE, UserFactory) {
    
      var getSingleList = function () {

      };

      var addListItem = function () {

      };

      var deleteListItem = function () {

      };
  
      return {
        get: getSingleList,
        add: addListItem,
        del: deleteListItem
      };
    }
  ])

}());