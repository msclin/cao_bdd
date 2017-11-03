@forgot-password
Feature: Common App Forgot Password Page
  As an applicant using the Common Application
  I want to be able to reset my password
  So that I can regain access to my account when I have forgotten my password

  Background:
    Given I navigate to The Common Application's login screen
      And I click the forgot password link
    Then I am on the forgot password screen

  @smoke @regression
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
      And the forgot password error icon is not visible

  @smoke @regression
  Scenario: Enter Email Address, Click Continue, And Go Back To Login Screen
    When I enter "test@commonapp.org" in the forgot password email field
    Then the forgot password email field contains the value "test@commonapp.org"

    When I click the continue button on the forgot password screen
      And I pause for 1 seconds to wait for the animation to complete
    Then the first step is marked as complete with a checkmark
      And the step in position 2 is active
      And the forgot password confirmation text reads "An email with a link to reset your password has been sent to the email address you provided."
      And the go to login page button is visible
      And the go to login page button has text "Go to login page"

    When I click the go to login page button
    Then I am on the login page

  @smoke @regression
  Scenario: Immediately Click Continue Button And Verify Error State
    When I click the continue button on the forgot password screen
    Then a forgot password error is visible
      And the forgot password error has text "You must supply a valid email address."
      And the forgot password error icon is visible

  @smoke @regression
  Scenario: Enter Invalid Email Address, Click Continue Button, And Verify Error State
    When I enter "test" in the forgot password email field
      And I click the continue button on the forgot password screen
    Then a forgot password error is visible
      And the forgot password error has text "You must supply a valid email address."
      And the forgot password error icon is visible

  @smoke @regression @marc-debug
  Scenario: Enter Invalid Email Address, Click Continue Button, Verify Error State, Correct Error, Click Continue Button, And Go Back To Login Screen
    When I enter "test" in the forgot password email field
      And I click the continue button on the forgot password screen
    Then a forgot password error is visible
      And the forgot password error has text "You must supply a valid email address."
      And the forgot password error icon is visible

    When I enter "test@test.com" in the forgot password email field
      And I click the continue button on the forgot password screen
      And I pause for 1 seconds to wait for the animation to complete
    Then the first step is marked as complete with a checkmark
      And the step in position 2 is active
      And the forgot password confirmation text reads "An email with a link to reset your password has been sent to the email address you provided."
      And the go to login page button is visible
      And the go to login page button has text "Go to login page"

    When I click the go to login page button
    Then I am on the login page