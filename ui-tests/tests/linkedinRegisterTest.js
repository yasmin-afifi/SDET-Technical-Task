const userData = require('../data/linkedinUser.json');

module.exports = {
  'LinkedIn Registration Flow': function (browser) {
    const linkedin = browser.page.linkedinPage();

    linkedin
      .navigate() // goes to https://www.linkedin.com (from page object)
      .waitForElementVisible('@joinNowBtn', 5000)
      .click('@joinNowBtn')

      .waitForElementVisible('@emailInput', 5000)
      .setValue('@emailInput', userData.email)
      .setValue('@passwordInput', userData.password)
      .click('@agreeJoinBtn')

      .waitForElementVisible('@firstNameInput', 5000)
      .setValue('@firstNameInput', userData.firstName)
      .setValue('@lastNameInput', userData.lastName)
      .click('@continueBtn')

      .waitForElementVisible('@securityCheckText', 8000)
      .assert.textContains('@securityCheckText', 'Security verification')

      .end();
  }
};
