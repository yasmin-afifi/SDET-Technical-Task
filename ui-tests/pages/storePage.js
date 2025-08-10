module.exports = {
  url: 'http://automationpractice.multiformis.com/index.php',
  elements: {
    searchInput: 'input[name="search_query"]',
    searchBtn: 'button[type="submit"]',
    productList: '.product_list', // Container for search results
    productItems: '.product_list .product-container', // Individual product items
    resultHeading: '.lighter' // e.g. 'Search results for "dress"'
  }
};