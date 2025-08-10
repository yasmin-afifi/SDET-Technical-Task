module.exports = {
  'My Store - Search for "dress" and verify results': function (browser) {
    const mystore = browser.page.storePage();

    mystore
      .navigate() 
      .waitForElementVisible('@searchInput', 5000)
      .setValue('@searchInput', 'dress')
      .click('@searchBtn')

      .waitForElementVisible('@productList', 5000)
      .assert.visible('@productItems', 'Search results are visible')
      .assert.containsText('@resultHeading', 'DRESS', 'Search heading contains the keyword')

      .end();
  }
};
