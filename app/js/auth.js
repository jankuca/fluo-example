var fluo = require('fluo');
var inherits = require('inherits');


/**
 * @constructor
 */
var Auth = function (auth_actions) {
  this.$auth_actions = auth_actions;

  this.user = null;

  fluo.Store.call(this);
};

inherits(Auth, fluo.Store);


Auth.prototype.init = function () {
  this.listenTo(this.$auth_actions.authenticate, this.authenticate_);
  this.listenTo(this.$auth_actions.logout, this.logout_);
};


Auth.prototype.authenticate_ = function () {
  var self = this;
  var getUserData = function (resolve, reject) {
    var userData = { 'username': 'Jan Kuča' };
    var userDidAuthenticate = function () {
      resolve(userData);
      self.user = userData;
      self.trigger();
    };
    setTimeout(userDidAuthenticate, 500);
  };

  return new Promise(getUserData);
};


Auth.prototype.logout_ = function () {
  this.user = null;
  this.trigger();
};


Auth.prototype.getUsername = function () {
  if (this.user) {
    return this.user['username'];
  }
  return null;
};


module.exports = Auth;
