'use strict';

angular.module('mean.turvaer').config(['$viewPathProvider', '$stateProvider',
  function($viewPathProvider, $stateProvider) {
    $viewPathProvider.override('system/views/index.html', 'turvaer/views/index.html');
  }
]);
