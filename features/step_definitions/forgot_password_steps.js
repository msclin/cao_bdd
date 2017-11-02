const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');

defineSupportCode(({ Given, Then, When }) => {
  When(/^I click the forgot password link$/, () => {
    return client.page.loginPage().clickForgotPasswordLink();
  });
});