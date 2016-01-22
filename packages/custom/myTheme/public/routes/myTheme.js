'use strict';

angular.module('mean.myTheme').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('myTheme example page', {
      url: '/myTheme/example',
      templateUrl: 'myTheme/views/index.html'
    });
  }
]);
