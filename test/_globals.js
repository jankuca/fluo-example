var jsdom = require('jsdom');
var expect = require('expect.js');


beforeEach(function (callback) {
  global.expect = expect;

  if (typeof global.window !== 'undefined') {
    return callback();
  }

  global.navigator = {
    userAgent: 'node.js'
  };

  jsdom.env('', [], function (errs, window) {
    global.window = window;
    global.document = window.document;

    callback();
  });
});


afterEach(function () {
  delete global.document;
  delete global.window;
  delete global.navigator;
  delete global.expect;
});
