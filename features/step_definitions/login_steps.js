const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');

defineSupportCode(({ Given, Then, When }) => {
  Given(/^I navigate to The Common Application's login screen$/, () => {
    const loginPage = client.page.loginPage();

    loginPage.navigate().waitForElementVisible('body', 1000);

    return client;
  });

  Then(/^I expect the Common App Helper Status to be visible$/, () => {
    const loginPage = client.page.loginPage();

    loginPage.verifyCommonAppHelperStatusIsVisible();

    return client;
  });

  Then(/^I expect the Common App Helper Status text to contain text "([^"]*)"$/, (expectedText) => {
    const loginPage = client.page.loginPage();

    loginPage.verifyCommonAppHelperStatusText(expectedText);

    return client;
  });

  Then(/^I expect the Common App Login Page Header to be visible$/, () => {
    const loginPage = client.page.loginPage();

    loginPage.verifyPageHeaderIsVisible();

    return client;
  });

  Then(/^I expect the Common App Login Page Header text to contain text "([^"]*)"/, (expectedText) => {
    const loginPage = client.page.loginPage();

    loginPage.verifyPageHeaderText(expectedText);

    return client;
  });

  Then(/^I expect the username field label to be visible$/, () => {
    const loginPage = client.page.loginPage();

    loginPage.verifyUsernameFieldLabelIsVisible();

    return client;
  });

  Then(/^I expect the username field label text to contain text "([^"]*)"$/, (expectedText) => {
    const loginPage = client.page.loginPage();

    loginPage.verifyUsernameFieldLabelText(expectedText);
  });

  Then(/^I expect the password field label to be visible$/, () => {
    const loginPage = client.page.loginPage();

    loginPage.verifyPasswordFieldLabelIsVisible();

    return client;
  });

  Then(/^I expect the password field label text to contain text "([^"]*)"$/, (expectedText) => {
    const loginPage = client.page.loginPage();

    loginPage.verifyPasswordFieldLabelText(expectedText);

    return client;
  });

  Then(/^I expect the create account link to be visible$/, () => {
    const loginPage = client.page.loginPage();

    loginPage.verifyCreateAccountLinkIsVisible();

    return client;
  });

  Then(/^I expect the create account link text to contain text "([^"]*)"$/, (expectedText) => {
    const loginPage = client.page.loginPage();

    loginPage.verifyCreateAccountLinkText(expectedText);

    return client;
  });

  Then(/^I expect the create account link to direct the user to the "([^"]*)" route$/, (expectedHref) => {
    const loginPage = client.page.loginPage();

    loginPage.verifyCreateAccountLinkHref(expectedHref);

    return client;
  });

  Then(/^I expect the need help link to be visible$/, () => {
    const loginPage = client.page.loginPage();

    loginPage.verifyNeedHelpLinkIsVisible();

    return client;
  });

  Then(/^I expect the need help link text to contain text "([^"]*)"$/, (expectedText) => {
    const loginPage = client.page.loginPage();

    loginPage.verifyNeedHelpLinkText(expectedText);

    return client;
  });

  Then(/^I expect the copyright information to be visible$/, () => {
    const loginPage = client.page.loginPage();

    loginPage.verifyCopyrightInformationIsVisible();

    return client;
  });

  Then(/^I expect the copyright information text to contain text "([^"]*)"$/, (expectedText) => {
    const loginPage = client.page.loginPage();

    loginPage.verifyCopyrightInformationText(expectedText);

    return client;
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

  When(/^I enter "([^"]*)" in the username field$/, (username) => {
    const loginPage = client.page.loginPage();

    loginPage.enterUsername(username);

    return client;
  });

  When(/^I enter "([^"]*)" in the password field$/, (password) => {
    const loginPage = client.page.loginPage();

    loginPage.enterPassword(password);

    return client;
  });
});