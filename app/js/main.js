var ioc = require('ioc-container');
var react = require('react');

var Auth = require('./auth');
var App = require('./app');

var AuthActions = require('./actions/auth');

var AppView = require('./components/app-view');


/**
 * main
 * @param {!Element} root_element The DOM element to which to mount the app.
 * @param {ioc.IocContainer=} injector A prepared IoC container instance.
 *   This makes it possible to mock services for integration testing.
 */
var main = function (root_element, injector) {
  injector = injector || new ioc.IocContainer();

  injector.addNewService('auth', Auth);
  injector.addNewService('auth_actions', AuthActions);

  var app_view = injector.create(AppView);
  react.render(app_view, root_element);

  var app = injector.create(App);
  app.init();
};


main(document.body);
