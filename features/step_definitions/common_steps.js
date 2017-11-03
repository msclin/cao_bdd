const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');

defineSupportCode(({ Given, Then, When }) => {
  When(/^I pause for (\d+) seconds to wait for the animation to complete$/, (seconds) => {
    return client.pause(seconds * 1000);
  });

  When(/^I refresh the page$/, () => {
    return client.refresh();
  });
});