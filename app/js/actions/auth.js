var fluo = require('fluo');


/**
 * @constructor
 */
var AuthActions = function () {
  return fluo.createActions({
    authenticate: { asyncResult: true },
    logout: {}
  });
};


module.exports = AuthActions;
