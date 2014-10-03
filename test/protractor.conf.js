exports.config = {
  chromeOnly: true,

  multiCapabilities: [
    {  'browserName': 'chrome' }
  /*,{  'browserName': 'firefox'}*/
  ],
  seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.43.1.jar',
  specs: ['./browserified/browserified_e2e_tests.js'],

  // rootElement: '.content',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
