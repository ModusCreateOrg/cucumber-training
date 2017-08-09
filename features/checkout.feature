@checkout
Feature: Checkout Feature
  As a user
  I want to my fill out my payment information
  So that I can place an order

  Scenario: Placing an order
    Given I am on the check out page
    When I fill in my payment information
    Then I should be able to place an order
