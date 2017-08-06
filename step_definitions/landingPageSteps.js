import { defineSupportCode } from 'cucumber';

defineSupportCode(({Given, When}) => {
  Given(/^I open the site landing page$/, () => {
    return 'pending';
  });

  When(/^I login using email ([^"]*)? and password ([^"]*)?$/, (userName, password) => {
    return 'pending';
  });
});
