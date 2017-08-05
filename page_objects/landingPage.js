// landing.page.js

'use strict';

import Page from './page';

class LandingPage extends Page {
    get usernameField() {
        return browser.element('input[id="email"]');
    }

    get passwordField() {
        return browser.element('input[id="pass"]');
    }

    get loginButton() {
        return browser.element('label[id="loginbutton"] input');
    }

    open() {
        super.open('');
    }

    fillCredentials(username, password) {
        if (username && username !== 'null') this.usernameField.setValue(username);
        if (password && password !== 'null') this.passwordField.setValue(password);
    }

    doLogin(username, password) {
        this.fillCredentials(username, password);
        this.loginButton.click();
    }
}

module.exports = new LandingPage();
