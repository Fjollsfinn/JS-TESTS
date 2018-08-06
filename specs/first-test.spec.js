let assert = require('assert');

describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://webdriver.io');
        let title = browser.getTitle();
        console.log(globals);
        assert.equal(title, 'WebdriverIO - WebDriver bindings for Node.js');
    });
});