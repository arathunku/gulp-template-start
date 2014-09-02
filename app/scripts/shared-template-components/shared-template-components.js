'use strict';

module.exports = function(app) {
  console.log('shared-template-components.js');

  require('./checkbox/checkbox.js')(app);
};
