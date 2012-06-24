'use strict';

/* Directives */


angular.module('angular-express-blog-chump.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
