const loginPageXpathTemplates = {
  loginPageErrorByPosition: position => `//div[@id="loginError"]//li[${ position }]`
};

module.exports = {
  commands: [
    {
      clickForgotPasswordLink() {
        this.expect.element('@forgotPasswordLink').to.be.visible;

        return this.click('@forgotPasswordLink');
      },

      clickSignInButton() {
        this.expect.element('@signInButton').to.be.visible;

        return this.click('@signInButton');
      },

      enterPassword(password) {
        return this.setValue('@passwordField', password);
      },

      enterUsername(username) {
        return this.setValue('@usernameField', username);
      },

      verifyADAComplianceLinkIsVisible() {
        return this.expect.element('@footerLinkADACompliance').to.be.visible;
      },

      verifyADAComplianceLinkText(expectedText) {
        return this.expect.element('@footerLinkADACompliance').text.to.contain(expectedText);
      },

      verifyCommonAppHelperStatusIsVisible() {
        return this.expect.element('@commonAppHelperStatus').to.be.visible;
      },

      verifyCommonAppHelperStatusText(expectedText) {
        return this.expect.element('@commonAppHelperStatus').text.to.contain(expectedText);
      },

      verifyCopyrightInformationIsVisible() {
        return this.expect.element('@copyrightInformation').to.be.visible;
      },

      verifyCopyrightInformationText(expectedText) {
        return this.expect.element('@copyrightInformation').text.to.contain(expectedText);
      },

      verifyCreateAccountLinkHref(expectedHref) {
        return this.expect.element('@createAccountLink').to.have.attribute('href').which.contains(expectedHref);
      },

      verifyCreateAccountLinkIsVisible() {
        return this.expect.element('@createAccountLink').to.be.visible;
      },

      verifyCreateAccountLinkText(expectedText) {
        return this.expect.element('@createAccountLink').text.to.contain(expectedText);
      },

      verifyForgotPasswordLinkIsVisible() {
        return this.expect.element('@forgotPasswordLink').to.be.visible;
      },

      verifyForgotPasswordLinkText(expectedText) {
        return this.expect.element('@forgotPasswordLink').text.to.contain(expectedText);
      },

      verifyLoginErrorByPositionAndExpectedText(position, expectedText) {
        const xpath = loginPageXpathTemplates.loginPageErrorByPosition(position);

        this.api.useXpath();

        return this.expect.element(xpath).text.to.contain(expectedText);
      },

      verifyLoginErrorsAreVisible() {
        return this.expect.element('@loginErrorsContainer').to.be.visible;
      },

      verifyLoginPageLoaded() {
        return this.expect.element('@loginFormContainer').to.be.visible;
      },

      verifyNeedHelpLinkIsVisible() {
        return this.expect.element('@needHelpLink').to.be.visible;
      },

      verifyNeedHelpLinkText(expectedText) {
        return this.expect.element('@needHelpLink').text.to.equal(expectedText);
      },

      verifyNoLoginErrorsAreVisible() {
        return this.expect.element('@loginErrorsContainer').to.not.be.visible;
      },

      verifyPageHeaderIsVisible() {
        return this.expect.element('@pageHeader').to.be.visible;
      },

      verifyPageHeaderText(expectedText) {
        return this.expect.element('@pageHeader').text.to.contain(expectedText);
      },

      verifyPasswordFieldLabelIsVisible() {
        return this.expect.element('@passwordFieldLabel').to.be.visible;
      },

      verifyPasswordFieldLabelText(expectedText) {
        return this.expect.element('@passwordFieldLabel').text.to.contain(expectedText);
      },

      verifyPasswordFieldValue(expectedValue) {
        return this.expect.element('@passwordField').to.have.attribute('value').which.equals(expectedValue);
      },

      verifyPrivacyPolicyLinkIsVisible() {
        return this.expect.element('@footerLinkPrivacyPolicy').to.be.visible;
      },

      verifyPrivacyPolicyLinkText(expectedText) {
        return this.expect.element('@footerLinkPrivacyPolicy').to.be.visible;
      },

      verifySystemRequirementsLinkIsVisible() {
        return this.expect.element('@footerLinkSystemRequirements').to.be.visible;
      },

      verifySystemRequirementsLinkText(expectedText) {
        return this.expect.element('@footerLinkSystemRequirements').text.to.contain(expectedText);
      },

      verifyTermsOfUseLinkIsVisible() {
        return this.expect.element('@footerLinkTermsOfUse').to.be.visible;
      },

      verifyTermsOfUseLinkText(expectedText) {
        return this.expect.element('@footerLinkTermsOfUse').text.to.contain(expectedText);
      },

      verifyUsernameFieldLabelIsVisible() {
        return this.expect.element('@usernameFieldLabel').to.be.visible;
      },

      verifyUsernameFieldLabelText(expectedText) {
        return this.expect.element('@usernameFieldLabel').text.to.contain(expectedText);
      },

      verifyUsernameFieldValue(expectedValue) {
        return this.expect.element('@usernameField').to.have.attribute('value').which.equals(expectedValue);
      }
    }
  ],

  elements: {
    commonAppHelperStatus: {
      locateStrategy: 'xpath',
      selector: '//div[contains(@class, "ca-helper-status-green")]'
    },

    copyrightInformation: {
      locateStrategy: 'xpath',
      selector: '//footer//li[1]'
    },

    createAccountLink: {
      locateStrategy: 'xpath',
      selector: '//a[contains(text(), "Create an Account")]'
    },

    footerLinkADACompliance: {
      locateStrategy: 'xpath',
      selector: '//a[text()="ADA-Compliant Application PDF"]'
    },

    footerLinkPrivacyPolicy: {
      locateStrategy: 'xpath',
      selector: '//a[text()="Privacy Policy (updated July 31, 2017)"]'
    },

    footerLinkSystemRequirements: {
      locateStrategy: 'xpath',
      selector: '//a[text()=" System Requirements"]'
    },

    footerLinkTermsOfUse: {
      locateStrategy: 'xpath',
      selector: '//a[text()="Terms of Use"]'
    },

    forgotPasswordLink: {
      locateStrategy: 'xpath',
      selector: '//a[@href="/forgot-password"]'
    },

    loginErrorsContainer: {
      locateStrategy: 'xpath',
      selector: '//div[@id="loginError"]'
    },

    loginFormContainer: {
      locateStrategy: 'xpath',
      selector: '//section[@class="ca-login-wrap"]'
    },

    needHelpLink: {
      locateStrategy: 'xpath',
      selector: '//a[@href="https://appsupport.commonapp.org/"]'
    },

    pageHeader: {
      locateStrategy: 'xpath',
      selector: '//h1'
    },

    passwordField: {
      locateStrategy: 'xpath',
      selector: '//input[@id="ApplicantPassword"]'
    },

    passwordFieldLabel: {
      locateStrategy: 'xpath',
      selector: '//label[@for="ApplicantPassword"]'
    },

    signInButton: {
      locateStrategy: 'xpath',
      selector: '//input[@type="submit"]'
    },

    usernameField: {
      locateStrategy: 'xpath',
      selector: '//input[@name="UserName"]'
    },

    usernameFieldLabel: {
      locateStrategy: 'xpath',
      selector: '//label[@for="ApplicantEmailAddress"]'
    }
  },

  url: 'https://apply.commonapp.org/Login',
}