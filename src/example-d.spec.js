describe('example-directive', function ()
{
    'use strict';

    var scope,
        $timeout,
        $rootScope,
        $compile;

    beforeEach(module('angularExample'));

    beforeEach(inject(function (_$rootScope_, _$compile_, _$timeout_)
    {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        $timeout = _$timeout_;

        scope = $rootScope.$new();
    }));

    it('should append a proper source view', function ()
    {
        var element = $compile('<example><div>some special div</div></example>')(scope);
        var code = element.find('code');
        expect(code.text()).to.contain('some special div');
    });

    it('should have the previous element attached', function ()
    {
        var exampleContent = '<span>some special span</span>';
        var element = $compile('<example>' + exampleContent + '</example>')(scope);
        var previewWrapper = angular.element(element.children()[0]);

        expect(previewWrapper.text()).to.contain('some special span');
    });

    it('the directives in the preview-wrapper should work as usual', function ()
    {
        var exampleContent = '<button ng-click="clickMe()">Click</button>';
        var element = $compile('<example>' + exampleContent + '</example>')(scope);
        var previewWrapper = angular.element(element.children()[0]);
        var button = previewWrapper.find('button');


        scope.count = 0;
        scope.clickMe = function ()
        {
            scope.count++;
        };

        button.triggerHandler('click');
        button.triggerHandler('click');

        expect(scope.count).to.equal(2);
    });
});
