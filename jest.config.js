module.exports = {
  reporters: [
    "default",
    ["jest-html-reporter", {
      pageTitle: "Mock User Auth API Test Report",
      outputPath: "./reports/api/api-test-report.html"
    }]
  ]
};