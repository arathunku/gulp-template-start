'use strict';

describe('MainSite', function(){
  beforeEach(function(){
    browser.get('http://127.0.0.1:9000');
  });

  it('should contain text', function(){
    expect(element(by.css('.title')).getText()).toEqual('woaaa');
  });
});
