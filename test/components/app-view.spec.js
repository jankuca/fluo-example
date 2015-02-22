var fluo = require('fluo');
var react = require('react/addons');
var utils = react.addons.TestUtils;

var AppView = require('../../app/js/components/app-view');

var MockAuth = require('../../app/js/auth.mock.js');


describe('AppView', function () {
  var auth_actions;

  beforeEach(function () {
    auth = new MockAuth();
    auth_actions = {
      authenticate: fluo.createAction({ asyncResult: true }),
      logout: fluo.createAction({ asyncResult: true })
    };
  });


  it('should trigger the authenticate action on a "Sign in" button click',
      function (callback) {
    var app_view = new AppView(auth, auth_actions);
    var doc = utils.renderIntoDocument(app_view);

    auth_actions.authenticate.listenOnce(callback.bind(null, null));

    var button = utils.findRenderedDOMComponentWithTag(doc, 'button');
    utils.Simulate.click(button);
  });


  it('should display the username if the user has been signed in',
      function () {
    var username = 'Jack White';
    auth.setUsername(username);

    var app_view = new AppView(auth, auth_actions);
    var doc = utils.renderIntoDocument(app_view);

    var status = utils.findRenderedDOMComponentWithClass(doc, 'status');
    var status_el = status.getDOMNode();
    expect(status_el.textContent).to.contain(username);
  });


  it('should display the username when the user signs in', function () {
    var username = 'Jack White';
    auth.setUsername(username);

    var app_view = new AppView(auth, auth_actions);
    var doc = utils.renderIntoDocument(app_view);

    auth.triggerSync();
    var status = utils.findRenderedDOMComponentWithClass(doc, 'status');
    var status_el = status.getDOMNode();
    expect(status_el.textContent).to.contain(username);
  });
});
