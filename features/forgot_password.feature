Feature: Common App Login Page
  As an applicant using the Common Application
  I want to be able to reset my password
  So that I can regain access to my account when I have forgotten my password

  Background:
    Given I navigate to The Common Application's login screen
      And I click the forgot password link
    Then I am on the forgot password screen

  @smoke @regression
  Scenario: Verify The Initial State of the Common App's Login Page
    And I pause for 5 seconds