import { defineSupportCode } from 'cucumber';

defineSupportCode(({ Then }) => {
    Then(/^I am successfully logged in$/, () => {
        console.log(browser.contextProcessor.getScenarioContext());
    });

    Then(/^I am redirected to Home page$/, () => {
        return 'pending';
    });
});
