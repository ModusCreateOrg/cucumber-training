import { defineSupportCode } from 'cucumber';
import LandingPage from '../page_objects/landingPage';

defineSupportCode(({ Given, When }) => {
    Given(/^I open the site landing page$/, () => {
        LandingPage.open();
    });

    When(/^I login using email ([^"]*)? and password ([^"]*)?$/, (userName, password) => {
        LandingPage.doLogin(userName, password);
    });
});
