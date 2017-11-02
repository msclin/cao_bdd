const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');

defineSupportCode(({ Given, Then, When }) => {
  Then(/^I pause for (\d+) seconds$/, (seconds) => {
    return client.pause(seconds * 1000);
  });
});