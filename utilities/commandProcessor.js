/* eslint-disable no-param-reassign,class-methods-use-this,no-plusplus */

/**
 * CustomCommands file
 */
class CustomCommands {

    /**
     * Initialize browser Custom Commands
     */
    constructor() {
        browser.addCommand('validateUrl', CustomCommands.validateUrl);
        browser.addCommand('moveToObject', CustomCommands.moveToObject, true);
    }

    /**
     * Custom browser command to validate that current URL contains an expected path
     * It waits up to 45 seconds for browser to load
     *
     * @param {String} expectedPath the path that needs to be validated
     */
    static validateUrl(expectedPath) {
        let i = 0;
        while (!browser.getUrl().includes(expectedPath) && i < 10) {
            browser.pause(500);
            i++;
        }
        expect(browser.getUrl()).to.contain(expectedPath);
    }

    /**
     * This is only for demo purposes. Please remove it on real usage
     *
     * @param {String} [selector=undefined] element selector
     * @param {Number} [x=50] xAxis relative distance from the upper left corner of the element
     * @param {Number} [y=50] xAxis relative distance from the upper left corner of the element
     *
     * @return {Object} seleniumElement the WebdriverIO element
     */
    static moveToObject(selector, x, y) {
        let seleniumElement;
        //
        if (typeof selector === 'string') {
            x = x || 50;
            y = y || 50;
        } else {
            selector = undefined;
            x = selector || 50;
            y = x || 50;
        }

        if (selector) {
            const elem = browser.element(selector);
            browser.moveTo(elem.value.ELEMENT, x, y);
        } else {
            seleniumElement = this.moveTo(this.element().value.ELEMENT, x, y);
        }

        return seleniumElement;
    }
}

module.exports = new CustomCommands();
