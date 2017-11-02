const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');

defineSupportCode(({ Given, Then, When }) => {
    When(/^I click the Sign Out Button$/, () => {
      return client.page.accountDashboard().clickSignOutButton();
    });
  });