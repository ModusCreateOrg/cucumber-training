![No longer maintained](https://img.shields.io/badge/Maintenance-OFF-red.svg)
### [DEPRECATED] This repository is no longer maintained
> While this project is fully functional, the dependencies are no longer up to date. You are still welcome to explore, learn, and use the code provided here.
>
> Modus is dedicated to supporting the community with innovative ideas, best-practice patterns, and inspiring open source solutions. Check out the latest [Modus Labs](https://labs.moduscreate.com?utm_source=github&utm_medium=readme&utm_campaign=deprecated) projects.

[![Modus Labs](https://res.cloudinary.com/modus-labs/image/upload/h_80/v1531492623/labs/logo-black.png)](https://labs.moduscreate.com?utm_source=github&utm_medium=readme&utm_campaign=deprecated)

---

Cucumber Training
=================

***

Training project to run WebdriverIO tests with [CucumberJS 2](https://github.com/cucumber/cucumber-js).
Code is written in [ES6](https://www.ecma-international.org/ecma-262/6.0/) and
transpiling is done at runtime using [Babel](https://babeljs.io/)


## Requirements

- Node version 6 or higher


## Quick Start

Choose one of the following options:

1. Clone the git repo — `git clone git@github.com:ModusCreateOrg/cucumber-training.git`

2. Clean the project (Optional):
- *On OSX/Linux:*
-- Run `npm run clean`

- *On Windows:*
-- Remove the directories `/node_modules` & `/reports`

4. Install the dependencies (`npm install`)

Now you are ready to write some features.


## Features

- Super simple setup
- Full integration with [WebdriverIO](http://webdriver.io/)
- Full integration with [CucumberJS 2](https://github.com/cucumber/cucumber-js)
- Full support for [ES6](https://www.ecma-international.org/ecma-262/6.0/)
- Runtime transpiling with [Babel](https://babeljs.io/) (transpiling is a
  specific kind of compiling)
- Integration with cloud services like [Sauce Labs](https://saucelabs.com/)


# How to Write a Test

Tests are written in [Gherkin syntax](https://cucumber.io/docs/reference), a
structure that lets you describe software behavior in a business readable,
domain specific language. All test files are located in `./features/*` and have
the file ending `.feature`. You will already find some test files in that
directory. They should demonstrate how tests could look. Just create a new
file and write your first test.

__landingPage.feature__
```gherkin
Feature: Test login
  As a QA
  I want to check login functionality
  by using both valid and invalid test data

  Scenario: Login using valid credentials
    Given I open the site landing page
    When I login using email sergiu@moduscreate.com and password dummyPassword
    Then I am successfully logged in
    And I am redirected to Home page

  Scenario: ...

```

This test opens the browser and navigates to facebook.com to check if login
functionality works as expected with both valid and invalid test data.
As you can see, it is pretty simple and understandable for everyone.


# How to Run the Tests

To run your tests just call the [WDIO runner](http://webdriver.io/guide/testrunner/gettingstarted.html):
```sh
$ node_modules/.bin/wdio wdio.conf.js
```

_Note:_ The WDIO runner uses the configuration file `wdio.conf.js` by
default. The above can also be translated into the following, though will almost
never be used since the _conf_ file will be overridden:
```sh
$ node_modules/.bin/wdio
```

## Running a Single Feature

To run a single feature file use the following command:
```sh
$ node_modules/.bin/wdio wdio.conf.js --spec ./features/landingPage.feature
```

For more functionality on organizing suites please take a look [here](http://webdriver.io/guide/testrunner/organizesuite.html)


# Configurations

To configure your tests, checkout the [`wdio.conf.js`](https://github.com/webdriverio/cucumber-boilerplate/blob/master/wdio.conf.js) file in your test directory. It comes with a bunch of documented options you can
choose from.

## Environment-Specific Configurations

You can setup multiple configs for specific environments. Let's say you want to
have a different `baseUrl` or different test packs for your local and pre-deploy
tests.

Use the `wdio.conf.js` to set all general configs (like cucumberOpts) that don't
change. It will be the _default_ or _base_ config file. For each different
_environment_ or _configuration_ you can create a new config with the following
name scheme:

```txt
wdio.<ENVIRONMENT>.conf.js
```

Now you can create a specific config for your pre-deploy tests:

__wdio.PR_VALIDATION.conf.js__
```js
var config = require('./wdio.conf.js').config;

config.baseUrl = 'http://localhost:8080';

exports.config = config;
```

Your environment-specific config file will get merged into the default config
file and overwrite the values you set. To run a test in a specific environment
just add the desired configuration file as the first parameter:

__NOTE:__ Import does not work at this level as Babel runtime transpiling is not
available here.

```sh
$ node_modules/.bin/wdio wdio.PR_VALIDATION.conf.js
```


# Adding New Steps and Snippets

In order to benefit from available IDE CucumberJS plugins all step definitions
should be stored in `/step_definitions`. They can be separated
by _pageObject_ / _functionality_ / _application flows_ / etc.

Snippet definitions use regular expressions. This is pretty powerful as
it allows you to create complex sentences with multiple options. Everything that's
within `"([^"]*)?"` gets captured and appended to the callback. The last argument
is always a callback function. You can access the browser and your WebdriverIO
instance with `browser`.

To assert values this training project comes with a [Chai](http://chaijs.com/)
integration.


# Comments

You can add additional descriptive comments in your feature files.

```gherkin
###
  This is a block comment
  that can spread across multiple lines.
###
Feature: Test login
  As a QA
  I want to check login functionality
  by using both valid and invalid test data

# This is a single line comment
  Scenario: Login using valid credentials
    Given I open the site landing page
    ...
```

For more information on contributors see:
 - [MalloryM](https://github.com/mallorym)
 - [SergiuP](https://github.com/popescunsergiu)
