;(function (){
  
  'use strict';

  angular.module('Top5')

  .factory('UserFactory', ['$http', 'PARSE',

    function ($http, PARSE) {
    
      // Add a new User
      var addUser = function (userObj) {

        console.log(userObj);
        //$http.post(PARSE.URL + 'users', userObj, PARSE.CONFIG);

      };
  
      return {
        register : addUser 
      };

    }

  ]);

}());