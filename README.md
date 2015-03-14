[![Stories in Ready](https://badge.waffle.io/johannesjo/angular-promise-buttons.svg?label=ready&title=Ready)](http://waffle.io/johannesjo/angular-promise-buttons)
[![Stories in progress](https://badge.waffle.io/johannesjo/angular-promise-buttons.svg?label=in%20progress&title=In%20Progress)](http://waffle.io/johannesjo/angular-promise-buttons)
[![Build Status](https://travis-ci.org/johannesjo/angular-promise-buttons.svg)](https://travis-ci.org/johannesjo/angular-promise-buttons)
[![Coverage Status](https://coveralls.io/repos/johannesjo/angular-promise-buttons/badge.svg?branch=master)](https://coveralls.io/r/johannesjo/angular-promise-buttons?branch=master)

angular-promise-buttons
===========

*Chilled Buttons for AngularJS*

There are cool loading buttons out there for angular. Only thing which annoys me, is that you have to manually trigger there loading state via a boolean (most of the times). ```angular-promise-buttons``` exists to solve this problem. Just pass the promise and save yourself two lines of code every time.

[Bug-reports or feature request](https://github.com/johannesjo/angular-promise-buttons/issues) as well as any other kind of **feedback is highly welcome!**

## getting started

Install it via bower
```
bower install angular-promise-buttons -S
```
and add `angularPromiseButtons` as dependency in your main module:
```
angular.module('yourApp',[
  'angularPromiseButtons'
]);
```

Using the buttons is easy. Just hand over the promise in question to the promiseBtn-directive and you're good to go:

```html
<button class="btn"
        ng-click="yourServiceCaller()"
        promise-btn="yourPromise">MyBtn <span>Look I'm nested content</span>
</button>
```
Now you just have to assign a promise to ```yourPromise```:
```javascript
// inside some controller
$scope.success = function ()
{
  $scope.successPromise = fakeFactory.method().then(...);
};
```

## styling the button
The base-styles might not be overwhelmingly sexy, but it is easy to fix that! There are lots of free css-spinners out there, just find one of your liking and add the css.

**Ressources:**
* http://cssload.net/
* http://projects.lukehaas.me/css-loaders/
* http://tobiasahlin.com/spinkit/


## configuration
There are also some defaults for you to set (if you like). You can do this by using the angularPromiseButtons-provider:
```javascript
angular.module('exampleApp', [
  'angularPromiseButtons'
])
.config(function (angularPromiseButtonsProvider)
{
  angularPromiseButtonsProvider.extendConfig({
    spinnerTpl: '<span class="btn-spinner"></span>',
    disableBtn: true,
    btnLoadingClass: 'is-loading'
  });
});
```
Thats all the logic there is (for now). Adjusting the look and feel of the spinner can be done using your own styles.


## ❤ contribute ❤
I'm happy for any [issue or feature request](https://github.com/johannesjo/angular-promise-buttons/issues), you might encounter or want to have. Even a one liner is better, than no feedback at all. Pull requests are also highly welcome. Just fork the repository, clone it and run `grunt serve` for development. Another important factor is the number of developers using and thus testing `angular-promise-buttons`. Tell your fellow programmers, [say that you use it on ng-modules](http://ngmodules.org/modules/angular-promise-buttons), tweet or even blog about it.

`angular-promise-buttons` is published under the [The GNU Lesser General Public License V2.1](https://github.com/johannesjo/angular-promise-buttons/blob/master/LICENSE).

## (possible) promising future features
* [your feature request](https://github.com/johannesjo/angular-promise-buttons/issues)!