'use strict';
if(typeof global.app === 'undefined') {
  global.app = {};
}
var _ = require('underscore');

var app = global.app;

_.extend(app, {
  config: process.env.CONFIG
});


require('./shared-util-components/shared-util-components.js')(app);
require('./shared-template-components/shared-template-components.js')(app);
