'use strict';
var template = require('./checkbox.jade')();

function renderTemplate(node) {
  node.innerHTML = template;
  throw new Error('Argument is not a node!');
}

module.exports = function(app) {
  console.log('checkbox.js');
  app.$sub('checkbox', function(event, node){
    renderTemplate(node);
  });
};
