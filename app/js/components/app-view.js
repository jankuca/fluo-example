var inherits = require('inherits');
var react = require('react');
var reacto = require('reacto');


/**
 * @constructor
 * @extends {reacto.Component}
 */
var AppView = function (auth, auth_actions) {
  reacto.Component.call(this);

  this.$auth = auth;
  this.$auth_actions = auth_actions;
};

inherits(AppView, reacto.Component);


AppView.prototype.componentDidMount = function () {
  this.$auth.listen(this.handleChange_, this);
};


AppView.prototype.getInitialState = function () {
  return this.readState_();
};


AppView.prototype.handleChange_ = function () {
  this.setState(this.readState_());
};


AppView.prototype.readState_ = function () {
  return {
    username: this.$auth.getUsername()
  };
};


AppView.prototype.render = function () {
  if (!this.state.username) {
    return react.DOM.div(null, [
      react.DOM.p({ className: 'status' }, 'Not signed in'),
      react.DOM.button({ onClick: this.$auth_actions.authenticate }, 'Sign in')
    ]);
  }
  return react.DOM.div(null, [
    react.DOM.p({ className: 'status' }, 'Username: ' + this.state.username),
    react.DOM.button({ onClick: this.$auth_actions.logout }, 'Logout')
  ]);
};


module.exports = AppView;
