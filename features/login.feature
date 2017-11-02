Feature: Common App Login Page
  As an applicant using the Common Application
  I want to be able to log into my account
  So that I can start or continue my application

  Background:
    Given I navigate to The Common Application's login screen
  
  @smoke @regression
  Scenario: Verify The Initial State of the Common App's Login Page
    Then I expect the Common App Login Page Header to be visible
      And I expect the Common App Login Page Header text to contain text "Sign In to My Application"
      And I expect the username field label to be visible
      And I expect the username field label text to contain text "Email"
      And I expect the password field label to be visible
      And I expect the password field label text to contain text "Password"
      And I expect the create account link to be visible
      And I expect the create account link text to contain text "Create an Account"
      And I expect the create account link to direct the user to the "/createaccount" route
      And I expect the need help link to be visible
      And I expect the need help link text to contain text "Need Help?"
      And I expect the forgot password link to be visible
      And I expect the forgot password link text to contain text "Forgot password?"
      And I expect the copyright information to be visible
      And I expect the copyright information text to contain text "©2017 The Common Application"
      And I expect the terms of use link to be visible
      And I expect the terms of use link to contain text "Terms of Use"
      And I expect the privacy policy link to be visible
      And I expect the privacy policy link to contain text "Privacy Policy"
      And I expect the ADA compliance link to be visible
      And I expect the ADA compliance link to contain text "ADA-Compliant Application PDF"
      And I expect the system requirements link to be visible
      And I expect the system requirements link to contain text "System Requirements"
      And I expect no login errors to be visible

  @smoke @regression
  Scenario: Log Into A Common Application Account
    When I enter "marc.clinedinst@gmail.com" in the username field
    Then I expect the username field to have a value of "marc.clinedinst@gmail.com"
      And I expect no login errors to be visible

    When I enter "C0mM0n4pp1?" in the password field
    Then I expect the password field to have a value of "C0mM0n4pp1?"
      And I expect no login errors to be visible

    When I click on the Sign In button
    Then I have logged in successfully

  @smoke @regression
  Scenario: Verify Login Form Errors After Immediately Clicking Submit Button
    Then I expect no login errors to be visible

    When I click on the Sign In button
    Then I expect login errors to be visible
      And I expect the login error in position 1 to be "Login was unsuccessful. Please correct the errors and try again."
      And I expect the login error in position 2 to be "The email provided is incorrect."

  @smoke @regression
  Scenario: Verify Login Form Errors After Entering Only Username And Clicking Submit Button
    Then I expect no login errors to be visible

    When I enter "marc.clinedinst@gmail.com" in the username field
    Then I expect the username field to have a value of "marc.clinedinst@gmail.com"
      And I expect no login errors to be visible
  
    When I click on the Sign In button
    Then I expect login errors to be visible
      And I expect the login error in position 1 to be "Login was unsuccessful. Please correct the errors and try again."
      And I expect the login error in position 2 to be "The user name or password provided is incorrect."

  @smoke @regression
  Scenario: Verify Login Form Errors After Entering Only Password And Clicking Submit Button
    Then I expect no login errors to be visible

    When I enter "foobar" in the password field
    Then I expect the password field to have a value of "foobar"
      And I expect no login errors to be visible

    When I click on the Sign In button
    Then I expect login errors to be visible
      And I expect the login error in position 1 to be "Login was unsuccessful. Please correct the errors and try again."
      And I expect the login error in position 2 to be "The email provided is incorrect."

  @smoke @regression
  Scenario: Verify Login Form Errors After Entering Username and Incorrect Password
    Then I expect no login errors to be visible

    When I enter "marc.clinedinst@gmail.com" in the username field
    Then I expect the username field to have a value of "marc.clinedinst@gmail.com"
      And I expect no login errors to be visible

    When I enter "foobar" in the password field
    Then I expect the password field to have a value of "foobar"
      And I expect no login errors to be visible
  
    When I click on the Sign In button
    Then I expect login errors to be visible
      And I expect the login error in position 1 to be "Login was unsuccessful. Please correct the errors and try again."
      And I expect the login error in position 2 to be "The user name or password provided is incorrect."

  @smoke @regression
  Scenario: Log Into Account And Then Log Out
    Then I expect no login errors to be visible

    When I log into the application with email address "marc.clinedinst@gmail.com" and password "C0mM0n4pp1?"
    Then I have logged in successfully

    When I click the Sign Out Button
    Then I have successfully logged out