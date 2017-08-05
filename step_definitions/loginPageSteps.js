import { defineSupportCode } from 'cucumber';

defineSupportCode(({ Then }) => {
    Then(/^I am redirected to Login page$/, () => {
        console.log(browser.contextProcessor.getScenarioContext());
    });

    Then(/^(.*) message is displayed$/, (messageType) => {
        return 'pending';
    });
});
