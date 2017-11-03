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

  Then(/^the forgot password email field contains the value "([^"]*)"$/, (expectedText) => {
    return client.page.forgotPassword().verifyForgotPasswordEmailFieldText(expectedText);
  });

  Then(/^the first step is marked as complete with a checkmark$/, () => {
    return client.page.forgotPassword().verifyFirstStepIsMarkedAsComplete();
  });

  Then(/^the forgot password confirmation text reads "([^"]*)"$/, (expectedText) => {
    return client.page.forgotPassword().verifyForgotPasswordConfirmationText(expectedText);
  });

  Then(/^the go to login page button is visible$/, () => {
    return client.page.forgotPassword().verifyGoToLoginPageButtonIsVisible();
  });

  Then(/^the go to login page button has text "([^"]*)"$/, (expectedText) => {
    return client.page.forgotPassword().verifyGoToLoginPageButtonText(expectedText);
  });

  Then(/^a forgot password error is visible$/, () => {
    return client.page.forgotPassword().verifyForgotPasswordErrorIsVisible();
  });

  Then(/^the forgot password error has text "([^"]*)"$/, (expectedText) => {
    return client.page.forgotPassword().verifyForgotPasswordErrorText(expectedText);
  });

  Then(/^the forgot password error icon (is|is not) visible$/, (isVisible) => {
    const forgotPassword = client.page.forgotPassword();

    if (isVisible === 'is') {
      forgotPassword.verifyPasswordErrorIconIsVisible();
    } else {
      forgotPassword.verifyPasswordErrorIconIsNotVisible();
    }

    return client;
  });

  When(/^I click the forgot password link$/, () => {
    return client.page.loginPage().clickForgotPasswordLink();
  });

  When(/^I enter "([^"]*)" in the forgot password email field$/, (email) => {
    return client.page.forgotPassword().enterEmailInForgotPasswordEmailField(email);
  })

  When(/^I click the continue button on the forgot password screen$/, () => {
    return client.page.forgotPassword().clickContinueButton();
  });

  When(/^I click the go to login page button$/, () => {
    return client.page.forgotPassword().clickGoToLoginPageButton();
  });

  When(/^I click the cancel link$/, () => {
    return client.page.forgotPassword().clickCancelLink();
  });
});