'use strict';

/* jshint -W098 */
angular.module('mean.turvaer').controller('TurvaerController', ['$scope', 'Global', 'Turvaer',
  function($scope, Global, Turvaer) {
      $scope.global = Global;
      $scope.package = {
          name: 'turvaer'
      };
      console.log(Turvaer);
  }
]);

