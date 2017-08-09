import { defineSupportCode } from 'cucumber';
import CheckoutPage from '../page_objects/CheckoutPage'

defineSupportCode(({Given, When, Then}) => {
  Given('I am on the check out page', () => {
    CheckoutPage.open();
  });
  When('I fill in my payment information', () => {
    CheckoutPage.fillCustomerInfo('test@test.com', 'Mallory', '123 Street');
    CheckoutPage.fillPaymentInfo('4111', 'Mallory', '123');
  //browser.debug();
  });
  Then('I should be able to place an order', () => {
    CheckoutPage.orderButton.click();
    browser.getTitle().should.be.equal('Menu');
  });
});
