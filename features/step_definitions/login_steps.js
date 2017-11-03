const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');

defineSupportCode(({ Given, Then, When }) => {
  Given(/^I navigate to The Common Application's login screen$/, () => {
    return client.page.loginPage().navigate();
  });

  Then(/^I am on the login page$/, () => {
    return client.page.loginPage().verifyLoginPageLoaded();
  });

  Then(/^I expect the Common App Helper Status to be visible$/, () => {
    return client.page.loginPage().verifyCommonAppHelperStatusIsVisible();
  });

  Then(/^I expect the Common App Helper Status text to contain text "([^"]*)"$/, (expectedText) => {
    return client.page.loginPage().verifyCommonAppHelperStatusText(expectedText);
  });

  Then(/^I expect the Common App Login Page Header to be visible$/, () => {
    return client.page.loginPage().verifyPageHeaderIsVisible();
  });

  Then(/^I expect the Common App Login Page Header text to contain text "([^"]*)"/, (expectedText) => {
    return client.page.loginPage().verifyPageHeaderText(expectedText);
  });

  Then(/^I expect the username field label to be visible$/, () => {
    return client.page.loginPage().verifyUsernameFieldLabelIsVisible();;
  });

  Then(/^I expect the username field label text to contain text "([^"]*)"$/, (expectedText) => {
    return client.page.loginPage().verifyUsernameFieldLabelText(expectedText);
  });

  Then(/^I expect the password field label to be visible$/, () => {
    return client.page.loginPage().verifyPasswordFieldLabelIsVisible();
  });

  Then(/^I expect the password field label text to contain text "([^"]*)"$/, (expectedText) => {
    return client.page.loginPage().verifyPasswordFieldLabelText(expectedText);
  });

  Then(/^I expect the create account link to be visible$/, () => {
    return client.page.loginPage().verifyCreateAccountLinkIsVisible();
  });

  Then(/^I expect the create account link text to contain text "([^"]*)"$/, (expectedText) => {
    return client.page.loginPage().verifyCreateAccountLinkText(expectedText);;
  });

  Then(/^I expect the create account link to direct the user to the "([^"]*)" route$/, (expectedHref) => {
    return client.page.loginPage().verifyCreateAccountLinkHref(expectedHref);
  });

  Then(/^I expect the need help link to be visible$/, () => {
    return client.page.loginPage().verifyNeedHelpLinkIsVisible();
  });

  Then(/^I expect the need help link text to contain text "([^"]*)"$/, (expectedText) => {
    return client.page.loginPage().verifyNeedHelpLinkText(expectedText);
  });

  Then(/^I expect the copyright information to be visible$/, () => {
    return client.page.loginPage().verifyCopyrightInformationIsVisible();
  });

  Then(/^I expect the copyright information text to contain text "([^"]*)"$/, (expectedText) => {
    return client.page.loginPage().verifyCopyrightInformationText(expectedText);
  });

  Then(/^I expect the (terms of use|privacy policy|ADA compliance|system requirements) link to be visible$/, (linkToCheck) => {
    const loginPage = client.page.loginPage();

    switch (linkToCheck) {
      case 'terms of use':
        loginPage.verifyTermsOfUseLinkIsVisible();
        break;
      case 'privacy policy':
        loginPage.verifyPrivacyPolicyLinkIsVisible();
        break;
      case 'ADA compliance':
        loginPage.verifyADAComplianceLinkIsVisible();
        break;
      case 'system requirements':
        loginPage.verifySystemRequirementsLinkIsVisible();
        break;
    }

    return client;
  });

  Then(/^I expect the (terms of use|privacy policy|ADA compliance|system requirements) link to contain text "([^"]*)"$/, (linkToCheck, expectedText) => {
    const loginPage = client.page.loginPage();
    
    switch (linkToCheck) {
      case 'terms of use':
        loginPage.verifyTermsOfUseLinkText(expectedText);
        break;
      case 'privacy policy':
        loginPage.verifyPrivacyPolicyLinkText(expectedText);
        break;
      case 'ADA compliance':
        loginPage.verifyADAComplianceLinkText(expectedText);
        break;
      case 'system requirements':
        loginPage.verifySystemRequirementsLinkText(expectedText);
        break;
    }

    return client;
  });

  Then(/^I expect the (password|username) field to have a value of "([^"]*)"$/, (field, expectedValue) => {
    const loginPage = client.page.loginPage();

    switch (field) {
      case 'password':
        loginPage.verifyPasswordFieldValue(expectedValue);
        break;
      case 'username':
        loginPage.verifyUsernameFieldValue(expectedValue);
        break;
    }

    return client;
  });

  Then(/^I have logged in successfully$/, () => {
    return client.page.accountDashboard().verifyDashboardTabIsVisible();
  });

  Then(/^I expect no login errors to be visible$/, () => {
    return client.page.loginPage().verifyNoLoginErrorsAreVisible();
  });

  Then(/^I expect login errors to be visible$/, () => {
    return client.page.loginPage().verifyLoginErrorsAreVisible();
  });

  Then(/^I expect the login error in position (\d+) to be "([^"]*)"$/, (position, expectedText) => {
    return client.page.loginPage().verifyLoginErrorByPositionAndExpectedText(position, expectedText);
  });

  Then(/^I have successfully logged out$/, () => {
    return client.page.loginPage().verifyLoginPageLoaded();
  });

  Then(/^I expect the forgot password link to be visible$/, () => {
    return client.page.loginPage().verifyForgotPasswordLinkIsVisible();
  });

  Then(/^I expect the forgot password link text to contain text "([^"]*)"$/, (expectedText) => {
    return client.page.loginPage().verifyForgotPasswordLinkText(expectedText);
  });

  When(/^I enter "([^"]*)" in the username field$/, (username) => {
    return client.page.loginPage().enterUsername(username);
  });

  When(/^I enter "([^"]*)" in the password field$/, (password) => {
    return client.page.loginPage().enterPassword(password);
  });

  When(/^I click on the Sign In button$/, () => {
    return client.page.loginPage().clickSignInButton();
  });;

  When(/^I log into the application with email address "([^"]*)" and password "([^"]*)"$/, (username, password) => {
    const loginPage = client.page.loginPage();

    loginPage.enterUsername(username);
    loginPage.enterPassword(password);
    loginPage.clickSignInButton();

    return client;
  });
});