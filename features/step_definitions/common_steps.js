const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');

defineSupportCode(({ Given, Then, When }) => {
  When(/^I pause for (\d+) seconds$/, (seconds) => {
    return client.pause(seconds * 1000);
  });

  When(/^I refresh the page$/, () => {
    return client.refresh();
  });
});