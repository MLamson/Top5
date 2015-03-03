;(function (){
  
  'use strict';

  angular.module('Top5')

  .controller('ListCtrl', ['$scope', 'ListsFactory',

    function ($scope, ListsFactory) {

      $scope.lists = [];

      ListsFactory.get().success( function (response) {
        $scope.lists = response.results;
      });
    
      $scope.addList = function (listObj) {
        ListsFactory.add(listObj);
      }


    }

  ])

}());