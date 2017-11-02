module.exports = {
  commands: [
    {
      verifyDashboardTabIsVisible() {
        this.expect.element('@dashboardTab').to.be.visible;
      }
    }
  ],

  elements: {
    dashboardTab: {
      locateStrategy: 'xpath',
      selector: '//a[text()="Dashboard"]'
    }
  }
}