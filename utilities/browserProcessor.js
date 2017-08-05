/* eslint-disable no-param-reassign */

/**
 * BrowserProcessor file
 */
class BrowserProcessor {

    /**
     * Returns the cookie by name
     * @param {String} cookieName - the name of the cookie
     * @return {Object} cookie
     */
    static getCookie(cookieName) {
        const cookie = browser.getCookie(cookieName);
        if (!cookie) {
            const err = `Cookie with name: ${cookieName} not found!`;
            throw err;
        }
        return cookie;
    }

    /**
     * Sets a cookie
     * @param {Object} cookie to set
     * @param {String} cookie.name mandatory to be able to set the cookie
     * @param {String} cookie.value mandatory to be able to set the cookie
     * @param {String} [cookie.domain=browser.options.baseUrl] the domain for which the cookie is valid
     * @param {String} [cookie.path='/'] the path for which the cookie is valid
     * @param {String} [cookie.expires=''] the expiration time of the cookie
     */
    static setCookie(cookie) {
        cookie.domain = cookie.domain || browser.options.baseUrl;
        cookie.path = cookie.path || '/';
        cookie.expires = cookie.expires || '';

        browser.setCookie({
            name: cookie.name,
            value: cookie.value,
            domain: cookie.domain,
            path: cookie.path,
            expires: cookie.expires,
        });
    }
}

module.exports = new BrowserProcessor();
