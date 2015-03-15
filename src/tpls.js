angular.module('angularExample').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('example-d.html',
    "<div class=\"example\" ng-transclude=\"\"></div><div class=\"example-controls\" ng-show=\"showButtons\"><button ng-click=\"showSource = !showSource\" style=\"float:right\"><span ng-show=\"!showSource\">Show Source</span><span ng-show=\"showSource\">Hide Source</span></button></div><div ng-show=\"showSource\"><pre class=\"prettyprint\"></pre></div><hr>"
  );

}]);
