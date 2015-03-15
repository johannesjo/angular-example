angular.module('angularExample')
    .directive('example', ['angularExample', function (angularExample)
    {
        'use strict';

        return {
            restrict: 'EA',
            scope: false,
            compile: function (el)
            {
                var cfg = angularExample.config;
                var wrappedContents = angular.element(cfg.previewWrapper).append(el.contents());

                // append original code
                el.append(wrappedContents);

                // clone contents
                wrappedContents = wrappedContents.clone();

                if (cfg.descriptionTagName) {
                    // remove descriptions from code-view
                    wrappedContents.find(cfg.descriptionTagName).remove();
                }

                // get html to manipulate
                var contentsHtml = wrappedContents.html();
                if (cfg.manipulateSourceViewFn) {
                    contentsHtml = cfg.manipulateSourceViewFn(contentsHtml);
                }
                var encodedExample = angular.element(cfg.hljsEl).text(contentsHtml);
                // append source-view
                el.append(encodedExample);
            }
        };
    }]);
