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
