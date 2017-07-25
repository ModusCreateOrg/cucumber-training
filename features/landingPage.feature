Feature: Test login
  As a QA
  I want to check login functionality
  by using both valid and invalid test data

  Background:
    Given I open the site landing page


  Scenario: Login using valid credentials
    When I login using email sergiu@moduscreate.com and password dummyPassword
    Then I am successfully logged in
    And I am redirected to Home page

  Scenario Outline: Login using invalid username and password combination
    When I login using email <email> and password <password>
    Then I am redirected to Login page
    And <message_type> message is displayed
    Examples:
      | email                  | password      | message_type                      |
      | sergiu@moduscreate.com | dummyPassword | invalid_password_combination |
      | qwedsa@dsa.com         | dummyPassword | non-existing_account              |
      |                        | dummyPassword | non-existing_account              |
      | sergiu@moduscreate.com |               | invalid_password                  |
      |                        |               | non-existing_account              |
      | qwedsa@dsa.com OR 1=1  | dummyPassword | non-existing_account              |
