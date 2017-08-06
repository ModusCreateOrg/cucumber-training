import { defineSupportCode } from 'cucumber';

defineSupportCode(({Then}) => {
  Then(/^I am successfully logged in$/, () => {
    return 'pending';
  });

  Then(/^I am redirected to Home page$/, () => {
    return 'pending';
  });
});
