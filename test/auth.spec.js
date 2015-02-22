var fluo = require('fluo');

var Auth = require('../app/js/auth');


describe('Auth', function () {
  var auth_actions;

  beforeEach(function () {
    auth_actions = {
      authenticate: fluo.createAction({ asyncResult: true }),
      logout: fluo.createAction({ asyncResult: true })
    };
  });


  it('should resolve the authenticate action', function (callback) {
    var auth = new Auth(auth_actions);
    auth.init();

    auth_actions.authenticate.then(callback.bind(null, null), callback);
    auth_actions.authenticate();
  });


  it('should trigger on an authenticate action result', function (callback) {
    var auth = new Auth(auth_actions);
    auth.init();

    auth.listenOnce(callback.bind(null, null));
    auth_actions.authenticate();
  });


  it('should trigger on the logout action', function (callback) {
    var auth = new Auth(auth_actions);
    auth.init();

    auth.listenOnce(callback.bind(null, null));
    auth_actions.logout();
  });
});
