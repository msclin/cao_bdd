const baseXpaths = {
  spanWithClassBullet: '//span[@class="bullet"]'
};

const baseXpathTemplates = {
  stepHeaderByPosition: position => `//li[@id="step${ position }hdr"]`
}

const forgotPasswordXpathTemplates = {
  stepHeaderBulletNumberByPosition: position => baseXpathTemplates.stepHeaderByPosition(position) + baseXpaths.spanWithClassBullet,
  stepHeaderTextByPosition: position => baseXpathTemplates.stepHeaderByPosition(position)
};

module.exports = {
  commands: [
    {
      clickContinueButton() {
        return this.click('@continueButton');
      },

      enterEmailInForgotPasswordEmailField(email) {
        return this.setValue('@emailInput', email);
      },

      clickGoToLoginPageButton() {
        return this.click('@goToLoginPageButton');
      },

      verifyCancelLinkIsVisible() {
        return this.expect.element('@cancelLink').to.be.visible;
      },

      verifyCancelLinkText(expectedText) {
        return this.expect.element('@cancelLink').to.have.attribute('value').which.equals(expectedText);
      },
      
      verifyContinueButtonIsVisible() {
        return this.expect.element('@continueButton').to.be.visible;
      },

      verifyContinueButtonText(expectedText) {
        return this.expect.element('@continueButton').to.have.attribute('value').which.equals(expectedText);
      },

      verifyEmailFieldLabelIsVisible() {
        return this.expect.element('@emailFieldLabel').to.be.visible;
      },

      verifyEmailFieldLabelText(expectedText) {
        return this.expect.element('@emailFieldLabel').text.to.contain(expectedText);
      },

      verifyFirstStepIsMarkedAsComplete() {
        return this.expect.element('@firstStepCheckMark').to.have.attribute('class').which.equals();
      },

      verifyForgotPasswordConfirmationText(expectedText) {
        return this.expect.element('@forgotPasswordConfirmationMessage').text.to.contain(expectedText);
      },

      verifyForgotPasswordEmailFieldText(expectedText) {
        return this.expect.element('@emailInput').to.have.attribute('value').which.equals(expectedText);
      },

      verifyForgotPasswordPageHeaderIsVisible() {
        return this.expect.element('@pageHeader').to.be.visible;
      },

      verifyForgotPasswordPageHeaderText(expectedText) {
        return this.expect.element('@pageHeader').text.to.contain(expectedText);
      },

      verifyForgotPasswordPageLoaded() {
        return this.expect.element('@pageContent').to.be.visible;
      },

      verifyFormHelpText(expectedText) {
        return this.expect.element('@formHelpText').text.to.contain(expectedText);
      },

      verifyGoToLoginPageButtonIsVisible() {
        return this.expect.element('@goToLoginPageButton').to.be.visible;
      },

      verifyGoToLoginPageButtonText(expectedText) {
        return this.expect.element('@goToLoginPageButton').to.have.attribute('value').which.equals(expectedText);
      },

      verifyNoForgotPasswordErrorsArePresent() {
        return this.expect.element('@errorMessage').to.not.be.visible;
      },

      verifyStepInPositionIsActive(position, isActive) {
        const xpath = forgotPasswordXpathTemplates.stepHeaderTextByPosition(position);

        this.api.useXpath();


        if (isActive) {
          this.expect.element(xpath).to.have.attribute('class').which.contains('active');
        } else {
          this.expect.element(xpath).to.have.attribute('class').which.does.not.contains('active');
        }

        return this;
      },

      verifyTextOfStepInPosition(position, expectedText) {
        const xpath = baseXpathTemplates.stepHeaderByPosition(position);
        
        this.api.useXpath();

        return this.expect.element(xpath).text.to.contain(expectedText);
      }
    }
  ],

  elements: {
    cancelLink: {
      locateStrategy: 'xpath',
      selector: '//input[@id="resetBack"]'
    },

    continueButton: {
      locateStrategy: 'xpath',
      selector: '//input[@id="resetContinue"]'
    },

    emailFieldLabel: {
      locateStrategy: 'xpath',
      selector: '//label[@for="resetEmail"]'
    },

    emailInput: {
      locateStrategy: 'xpath',
      selector: '//input[@id="resetEmail"]'
    },

    errorMessage: {
      locateStrategy: 'xpath',
      selector: '//span[@id="errMsg"]'
    },

    firstStepCheckMark: {
      locateStrategy: 'xpath',
      selector: '//span[@class="i-l-aria"]'
    },

    forgotPasswordConfirmationMessage: {
      locateStrategy: 'xpath',
      selector: '//div[@id="step2"]//p'
    },

    formHelpText: {
      locateStrategy: 'xpath',
      selector: '//div[@class="form"]//p'
    },

    goToLoginPageButton: {
      locateStrategy: 'xpath',
      selector: '//input[@id="resetContinue"]'
    },

    pageContent: {
      locateStrategy: 'xpath',
      selector: '//div[@id="ca-page-content"]'
    },

    pageHeader: {
      locateStrategy: 'xpath',
      selector: '//h2[@class="ca-page-red-title"]'
    }
  }
}