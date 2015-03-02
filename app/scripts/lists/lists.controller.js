;(function (){
  
  'use strict';

  angular.module('Top5')

  .controller('ListCtrl', ['$scope', '$http', 'PARSE', 'UserFactory',

    function ($scope, $http, PARSE, UserFactory) {

      var user = UserFactory.user();

      $http.get(PARSE.URL + 'classes/Lists', PARSE.CONFIG).then( function (r) { console.log(r); })
    
      $scope.addList = function (listObj) {

        // Add User Pointer to my list object
        listObj.user = {
          __type: 'Pointer',
          className: '_User',
          objectId: user.objectId
        }

        // Set up Access Control

        var ACLObj = {};
        ACLObj[user.objectId] = {
          'read' : true,
          'write' : true
        }

        listObj.ACL = ACLObj;

        $http.post(PARSE.URL + 'classes/Lists', listObj, PARSE.CONFIG)
          .then( function (res) {
            console.log(res);
          }
        );


      }


    }

  ])

}());