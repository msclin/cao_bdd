@forgot-password
Feature: Common App Forgot Password Page
  As an applicant using the Common Application
  I want to be able to reset my password
  So that I can regain access to my account when I have forgotten my password

  Background:
    Given I navigate to The Common Application's login screen
      And I click the forgot password link
    Then I am on the forgot password screen

  @smoke @regression @marc-debug
  Scenario: Verify The Initial State of Common App's Forgot Password Page
    Then the forgot password page header is visible
      And the forgot password page header contains text "Password Reset"
      And the step in position 1 is active
      And the step in position 1 has text "Email Address"
      And the step in position 2 is not active
      And the step in position 2 has text "Confirmation"
      And the form help text reads "Enter the email address associated with your Common Application account and click 'Continue' below to have password reset instructions emailed to you."
      And the email field label is visible
      And the email field has the label "Email Address"
      And the cancel link is visible
      And the cancel link has text "Cancel"
      And the continue button is visible
      And the continue button has text "Continue"
      And there are no forgot password errors present