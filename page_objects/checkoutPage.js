// landing.page.js

'use strict';

import Page from './page';

class CheckoutPage extends Page {
  get emailField() {
    return browser.element('input[id="email"]');
  }

  get nameField() {
    return browser.element('input[id="name"]');
  }

  get addressField() {
    return browser.element('textarea[id="address"]');
  }

  get paymentDropdown() {
    return browser.element('select[id="card_type"]');
  }

  get cardNumberField() {
    return browser.element('input[id="card_number"]');
  }

  get cardHolderField() {
    return browser.element('input[id="cardholder_name"]');
  }

  get verificationField() {
    return browser.element('input[id="verification_code"]');
  }

  get orderButton() {
    return browser.element('button[class="btn btn-primary"]');
  }

  open() {
    super.open('check-out.html');
  }

  fillCustomerInfo(email, name, address) {
    this.emailField.setValue(email);
    this.nameField.setValue(name);
    this.addressField.setValue(address);
  }

  fillPaymentInfo(number, name, code, card) {
    this.cardNumberField.setValue(number);
    this.cardHolderField.setValue(name);
    this.verificationField.setValue(code);
    this.paymentDropdown.click('#card_type > option:nth-child(2)');
  }

  submitPayment(email, name, address, number, code, card) {
    this.fillCustomerInfo(email, name, address);
    this.fillPaymentInfo(number, name, code);
    this.orderButton.click();
  }
}

module.exports = new CheckoutPage();
