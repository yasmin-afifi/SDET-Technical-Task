module.exports = {
  url: 'https://www.linkedin.com',
  elements: {
    joinNowBtn: 'a[href*="signup"]', // Join now link
    emailInput: 'input[name="email-address"]', // Email input
    passwordInput: 'input[name="password"]',   // Password input
    agreeJoinBtn: 'button[type="submit"]',     // Agree & join button
    firstNameInput: 'input[name="first-name"]', // First name
    lastNameInput: 'input[name="last-name"]',   // Last name
    continueBtn: 'button[type="submit"]',      // Same button might be reused
    securityCheckText: 'h2' // Header on the security page
  }
};