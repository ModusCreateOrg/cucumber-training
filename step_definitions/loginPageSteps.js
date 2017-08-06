import { defineSupportCode } from 'cucumber';

defineSupportCode(({Then}) => {
  Then(/^I am redirected to Login page$/, () => {
    return 'pending';
  });

  Then(/^(.*) message is displayed$/, (messageType) => {
    return 'pending';
  });
});
