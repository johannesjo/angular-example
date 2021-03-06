[![Stories in Ready](https://badge.waffle.io/johannesjo/angular-example.svg?label=ready&title=Ready)](http://waffle.io/johannesjo/angular-example)
[![Stories in progress](https://badge.waffle.io/johannesjo/angular-example.svg?label=in%20progress&title=In%20Progress)](http://waffle.io/johannesjo/angular-example)
[![Build Status](https://travis-ci.org/johannesjo/angular-example.svg)](https://travis-ci.org/johannesjo/angular-example)
[![Coverage Status](https://coveralls.io/repos/johannesjo/angular-example/badge.svg?branch=master)](https://coveralls.io/r/johannesjo/angular-example?branch=master)

angular-example
===========

*Relaxing style- and component guides for AngularJS*

Maintaining a styleguide can be very annoying. A component-showcase might be even painful to deal with. ```angular-example``` makes both those things easy build on top of the wonderful [angular-highlightjs] (https://github.com/pc035860/angular-highlightjs). Have a look at the angular-example [example](http://johannesjo.github.io/angular-example/#demo).

[Bug-reports or feature request](https://github.com/johannesjo/angular-example/issues) as well as any other kind of **feedback is highly welcome!**

## getting started

Install it via bower
```
bower install angular-example -S
```
and add `angularExample` as dependency in your main module:
```
angular.module('yourApp',[
  'angularExample'
]);
```

Using the component is easy. Just wrap your markup and your good to go:

```html
<example>
  <my-sexy-component ng-init="data=['data', 'you', 'might', 'want']" data="data">
     <p>Some text with <i>style</i>
  </my-sexy-component>
  <some-releated-directive></some-releated-directive>
  <description>optional</description>
</example>

```
Your components should work as usual and they get a nice source-view attached. If you want to add a little more Information, you can use the description-tag. Everything inside, won't be shown in the source-view.

## configuration
There are also some defaults for you to set (if you like). You can do this by using the angularExample-provider:
```javascript
angular.module('exampleApp', [
  'angularExample'
])
.config(function (angularExampleProvider)
{
  angularExampleProvider.extendConfig({
    previewWrapper: '<div class="example-interactive"/>',
    hljsEl: '<hljs no-escape/>',
    descriptionTagName: 'description',
    manipulateSourceViewFn: function (contentsHtml)
    {
      // trim blank lines
      contentsHtml = contentsHtml.replace(/^\s*\n/gm, '');
      return contentsHtml;
    }
  });
});
```



## ❤ contribute ❤
I'm happy for any [issue or feature request](https://github.com/johannesjo/angular-example/issues), you might encounter or want to have. Even a one liner is better, than no feedback at all. Pull requests are also highly welcome. Just fork the repository, clone it and run `grunt serve` for development. Another important factor is the number of developers using and thus testing `angular-example`. Tell your fellow programmers, [say that you use it on ng-modules](http://ngmodules.org/modules/angular-example), tweet or even blog about it.

`angular-example` is published under the [The GNU Lesser General Public License V2.1](https://github.com/johannesjo/angular-example/blob/master/LICENSE).

## (possible) promising future features
* [your feature request](https://github.com/johannesjo/angular-example/issues)!
