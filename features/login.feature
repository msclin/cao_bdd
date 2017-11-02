Feature: Common App Login Page
  As an applicant using the Common Application
  I want to be able to log into my account
  So that I can start or continue my application

  Background:
    Given I navigate to The Common Application's login screen
  
  Scenario: Verify The Initial State of the Common App's Login Page
    Then I expect the Common App Helper Status to be visible
      And I expect the Common App Helper Status text to contain text "Deadline coming up? You'll need to submit your application by 11:59pm your local time on the deadline date--but you don't have to wait until then. Learn more about deadlines here. Need help or have a question? The Applicant Solutions Center is open 24 hours a day, 7 days a week."
      And I expect the Common App Login Page Header to be visible
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

  Scenario: Log Into A Common Application Account
    When I enter "marc.clinedinst@gmail.com" in the username field
      And I enter "C0mM0n4pp1?" in the password field
      And I pause for 2 seconds