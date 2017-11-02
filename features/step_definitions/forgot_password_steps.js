const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');

defineSupportCode(({ Given, Then, When }) => {
  Then(/^I am on the forgot password screen$/, () => {
    return client.page.forgotPassword().verifyForgotPasswordPageLoaded();
  });

  Then(/^the forgot password page header is visible$/, () => {
    return client.page.forgotPassword().verifyForgotPasswordPageHeaderIsVisible();
  });

  Then(/^the forgot password page header contains text "([^"]*)"$/, (expectedText) => {
    return client.page.forgotPassword().verifyForgotPasswordPageHeaderText(expectedText);
  });

  Then(/^the step in position (1|2) (is|is not) active$/, (position, isActive) => {
    return client.page.forgotPassword().verifyStepInPositionIsActive(position, isActive === 'is');
  });

  Then(/^the step in position (1|2) has text "([^"]*)"$/, (position, expectedText) => {
    return client.page.forgotPassword().verifyTextOfStepInPosition(position, expectedText);
  });

  Then(/^the form help text reads "([^"]*)"$/, (expectedText) => {
    return client.page.forgotPassword().verifyFormHelpText(expectedText);
  });

  Then(/^the email field label is visible$/, () => {
    return client.page.forgotPassword().verifyEmailFieldLabelIsVisible();
  });

  Then(/^the email field has the label "([^"]*)"$/, (expectedText) => {
    return client.page.forgotPassword().verifyEmailFieldLabelText(expectedText);
  });

  Then(/^the cancel link is visible$/, () => {
    return client.page.forgotPassword().verifyCancelLinkIsVisible();
  });

  Then(/^the cancel link has text "([^"]*)"$/, (expectedText) => {
    return client.page.forgotPassword().verifyCancelLinkText(expectedText);
  });

  Then(/^the continue button is visible$/, () => {
    return client.page.forgotPassword().verifyContinueButtonIsVisible();
  });

  Then(/^the continue button has text "([^"]*)"$/, (expectedText) => {
    return client.page.forgotPassword().verifyContinueButtonText(expectedText);
  });

  Then(/^there are no forgot password errors present$/, () => {
    return client.page.forgotPassword().verifyNoForgotPasswordErrorsArePresent();
  });

  When(/^I click the forgot password link$/, () => {
    return client.page.loginPage().clickForgotPasswordLink();
  });
});