;(function (){
  
  'use strict';

  angular.module('Top5')

  .factory('UserFactory', ['$http', 'PARSE',

    function ($http, PARSE) {
    
      // Add a new User
      var addUser = function (userObj) {
        $http.post(PARSE.URL + 'users', userObj, PARSE.CONFIG)
          .then( function (res) {
            console.log(res);
          }
        );
      };

      // Log in a User
      var loginUser = function (userObj) {

        $http({
          method: 'GET',
          url: PARSE.URL + 'login',
          headers: PARSE.CONFIG.headers,
          params: userObj
        }).then (function (res) {
          console.log(res);
        });
        
      };
  
      return {
        register : addUser, 
        login : loginUser
      };

    }

  ]);

}());