"use strict";
class Page {
    constructor() {
        this.title = 'Facebook';
    }

    open(path) {
        browser.url('/' + path);
    }
}

module.exports = Page;