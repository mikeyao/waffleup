'use strict';

/**
 * @ngdoc function
 * @name waffleupApp.controller:StudentCtrl
 * @description
 * # StudentCtrl
 * Controller of the waffleupApp
 */
angular.module('waffleupApp')
  .controller('StudentCtrl', function($scope, Ref, $firebaseObject) {
    $firebaseObject(Ref.child('studentChoice')).$bindTo($scope, 'studentChoice');
  });
