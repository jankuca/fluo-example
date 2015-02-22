var fluo = require('fluo');
var inherits = require('inherits');


/**
 * @constructor
 */
var MockAuth = function () {
  this._username = null;

  fluo.Store.call(this);
};

inherits(MockAuth, fluo.Store);


MockAuth.prototype.getUsername = function () {
  return this._username;
};


MockAuth.prototype.setUsername = function (username) {
  if (typeof username === 'undefined') {
    username = null;
  }
  this._username = username;
};


module.exports = MockAuth;
