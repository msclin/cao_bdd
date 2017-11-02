module.exports = {
  commands: [
    {
      clickSignOutButton() {
        this.expect.element('@signOutButton').to.be.visible;

        return this.click('@signOutButton');
      },

      verifyDashboardTabIsVisible() {
        return this.expect.element('@dashboardTab').to.be.visible;
      }
    }
  ],

  elements: {
    dashboardTab: {
      locateStrategy: 'xpath',
      selector: '//a[text()="Dashboard"]'
    },
    signOutButton: {
      locateStrategy: 'xpath',
      selector: '//input[@id="appLogOff"]'
    }
  }
}