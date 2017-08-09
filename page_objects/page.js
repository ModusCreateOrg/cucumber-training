
'use strict';

/**
 * Page file
 */
class Page {
  constructor() {
    this.title = '';
  }

  open(path) {
    browser.url('/' + path);
  }
}

module.exports = Page;
