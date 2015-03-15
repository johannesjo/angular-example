angular.module('angularExample', [
    'hljs'
]);


angular.module('angularExample')
    .provider('angularExample', function angularExampleProvider()
    {
        'use strict';

        // *****************
        // DEFAULTS & CONFIG
        // *****************

        var config = {
            previewWrapper: '<div class="example-interactive"/>',
            hljsEl: '<hljs no-escape/>',
            descriptionTagName: 'description',
            manipulateSourceViewFn: function (contentsHtml)
            {
                // remove initial indent
                contentsHtml = contentsHtml.replace(/(^|\n)    /g, '$1');
                // trim blank lines
                contentsHtml = contentsHtml.replace(/^\s*\n/gm, '');
                return contentsHtml;
            }

        };

        // *************************
        // PROVIDER-CONFIG-FUNCTIONS
        // *************************

        return {
            extendConfig: function (newConfig)
            {
                config = angular.extend(config, newConfig);
            },


            // ************************************************
            // ACTUAL FACTORY FUNCTION - used by the directive
            // ************************************************

            $get: function ()
            {
                return {
                    config: config
                };
            }
        };
    });

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
