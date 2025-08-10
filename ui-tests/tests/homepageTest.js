module.exports = {
  'Homepage loads correctly': function (browser) {
    browser
      .url('http://s3-design-sample-site.s3-website-us-west-2.amazonaws.com/')
      .waitForElementVisible('body', 3000)
      .assert.textContains('body', 'The point is not merely to enhance the strength')

      .click('a[href="contact.html"]')
      .waitForElementVisible('body', 3000)
      .assert.textContains('body', 'CONTACT ACME CHEMICALS')

      .back()
      .waitForElementVisible('body', 3000) 
      .assert.textContains('body', 'The point is not merely to enhance the strength')

      .end();
  }
};