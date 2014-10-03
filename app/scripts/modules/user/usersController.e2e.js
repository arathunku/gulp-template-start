'use strict';

describe('Users List', function(){
  beforeEach(function(){
    browser.get('http://127.0.0.1:9000/user');
    browser.waitForAngular();
  });

  it('should display usernames', function(){
    browser.debugger();
    expect(element(by.repeater('user in users')).getText()).toEqual('username');
  });
});
