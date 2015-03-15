angular.module('angularExample')
    .provider('angularExample', function angularExampleProvider()
    {
        'use strict';

        // *****************
        // DEFAULTS & CONFIG
        // *****************

        var config = {
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
