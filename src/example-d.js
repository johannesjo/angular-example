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

                var contents = el.contents();
                var wrappedContents = angular.element('<div/>').append(contents);
                // append original code
                el.append(wrappedContents);

                wrappedContents = wrappedContents.clone();
                wrappedContents.find('description').remove();

                var contentsHtml = wrappedContents.html();
                // remove initial indent
                contentsHtml = contentsHtml.replace(/(^|\n)    /g, '$1');
                // trim blank lines
                contentsHtml = contentsHtml.replace(/^\s*\n/gm, '');

                var encodedExample = angular.element('<hljs no-escape/>').text(contentsHtml);
                // append source-view
                el.append(encodedExample);
            }
        };
    }]);
