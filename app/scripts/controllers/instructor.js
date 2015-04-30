'use strict';

/**
 * @ngdoc function
 * @name waffleupApp.controller:InstructorCtrl
 * @description
 * # InstructorCtrl
 * Controller of the waffleupApp
 */
angular.module('waffleupApp')
  .controller('InstructorCtrl', function($scope, Ref, $firebaseObject) {
    $scope.instructorView2 = $firebaseObject(Ref.child('studentChoice'));
  });
