'use strict';

/**
 * @ngdoc function
 * @name waffleupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the waffleupApp
 */
angular.module('waffleupApp')
  .controller('MainCtrl', function($scope, Ref, $firebaseObject) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $firebaseObject(Ref.child('thumbsStatus')).$bindTo($scope, 'thumbsStatus');

    $scope.instructorView = $firebaseObject(Ref.child('thumbsStatus'));

  });
