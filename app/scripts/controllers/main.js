'use strict';

/**
 * @ngdoc function
 * @name waffleupApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the waffleupApp
 */
angular.module('waffleupApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
