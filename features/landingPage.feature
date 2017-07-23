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

  Scenario: Login using invalid username and password combination
    When I login using email sergiu@moduscreate.com and password dummyPassword
    Then I am redirected to Login page
    And invalid-password message is displayed

  Scenario: Login using invalid username
    When I login using email qwedsa@dsa.com and password dummyPassword
    Then I am redirected to Login page
    And non-existing-account message is displayed

  Scenario: Login using empty username
    When I login using email null and password dummyPassword
    Then I am redirected to Login page
    And non-existing-account message is displayed

  Scenario: Login using empty password
    When I login using email sergiu@moduscreate.com and password null
    Then I am redirected to Login page
    And invalid-password message is displayed

  Scenario: Login using empty credentials
    When I login using email null and password null
    Then I am redirected to Login page
    And non-existing-account message is displayed
