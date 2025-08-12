# SDET Technical Task – Siemens

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/yasmin-afifi/SDET-Technical-Task/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/yasmin-afifi/SDET-Technical-Task/tree/main)

This project contains automated UI tests written using **Nightwatch.js**, for a sample static website and a real external website (LinkedIn), and a functional e-commerce site (My Store), and a mock authentication API. 

The project demonstrates:

- Functional & API test case design
- **UI Automation** using [Nightwatch.js](https://nightwatchjs.org/) with the **Page Object Model (POM)**
- **API Testing** using [Jest](https://jestjs.io/) & [Supertest](https://github.com/ladjs/supertest)
- Data-driven testing
- End-to-end testing with assertions and navigation
- HTML reporting for both UI & API tests
- CircleCI CI/CD integration

---

## 📁 Folder Structure

```
SDET-Technical-Task/
├── node_modules/                   # Project dependencies
├── ui-tests/                      # All UI-related test assets
│   ├── pages/                     # Page Object Models (POM)
│   │   └── linkedinPage.js
│   │   └── storePage.js
│   ├── data/                      # Test data
│   │   └── linkedinUser.js
│   └── tests/                     # Automated test cases
│       ├── linkedinRegisterTest.js
│       └── homepageTest.js
│       └── myStoreSearchTest.js
├── api-tests/                       # API test assets
│   ├── mock-user-auth-server.js     # Local mock API server
│   ├── apiClient.js                 # Supertest client setup
│   ├── testData.js                  # API test data
│   └── __tests__/                   # Automated API test cases
│       ├── auth.test.js
│       └── users.test.js
├── nightwatch.conf.js             # Nightwatch configuration
├── jest.config.js                   # Jest configuration for API tests
├── package.json                   # Project metadata and scripts
├── package-lock.json              # NPM lock file
├── reports/                       # Project UI/API reports
│   ├── api/  
|   |   └── api-test-report.html     # Auto-generated Jest API test report
│   └──  ui/                            # Auto-generated Nightwatch reports 
└── README.md                      # Project documentation
```

---

##  Setup Instructions

>  Requires Node.js and Chrome browser installed

1. **Install project dependencies**
    ```bash
    npm install
    ```

2. **Install ChromeDriver**
    ```bash
    npm install chromedriver --save-dev
    ```

---

##  Running Tests

- ### Homepage Test (Task 1)
    ```bash
    npx nightwatch ui-tests/tests/homepageTest.js --env chrome
    ```
    or
    
    ```bash
    npm run test:homepage
    ```


- ### LinkedIn Registration Flow (Task 2 – POM + data-driven)
    ```bash
    npx nightwatch ui-tests/tests/linkedinRegisterTest.js --env chrome
    ```
    or
    
    ```bash
    npm run test:linkedin
    ```

- ### My Store Search Test (Task 3 – POM Only)
    ```bash
    npx nightwatch ui-tests/tests/myStoreSearchTest.js --env chrome
    ```
    or
    
    ```bash
    npm run test:mystore
    ```

- ### Run all UI tests
    ```bash
    npm run test:ui
    ```

- ### Mock User Auth API Tests (Task 4)
    ```bash
    npm run test:api
    ```

- ### Run everything in order (UI → API)
    ```bash
    npm test
    ```


---

##  Key Concepts

- ✅ Uses **Page Object Model (POM)** for reusable selectors
- ✅ Reads test data from external module (`linkedinUser.js`)
- ✅ Validates critical UI elements and navigations
- ✅ Covers all API routes from `mock-user-auth`
  - `POST /api/v1/auth`
  - `POST /api/v1/users`
  - `GET /api/v1/users`
  - `PATCH /api/v1/users`
  - `DELETE /api/v1/users`
  - `DELETE /api/v1/all-users`
- ✅ Generates HTML reports in:
  -  `/reports/ui` for UI tests
  -  `/reports/api` for API tests
- ✅ Fully integrated with CircleCI for CI/CD

---

##  Adding More Tests
- ### UI Tests:

  1. Add your test to `ui-tests/tests/`
  2. (Optional) Create a new page object in `ui-tests/pages/`
  3. (Optional) Add test data in `ui-tests/data/`
  4. Run your test:
  ```bash
  npx nightwatch ui-tests/tests/yourTestFile.js --env chrome
  ```


- ### API Tests:

  1. Add your test to `api-tests/__tests__/`
  2. Use `apiClient.js` for Supertest setup
  3. Add new API data in `testData.js`
  4. Run your test:
  ```bash
  npm run test:api
  ```

---

##  Reports
- ### UI Reports:
    Generated in `/reports/ui/` after Nightwatch runs

- ### API Reports:
    Generated as `api-test-report.html` under `/reports/api/`

---

## ℹ️ Notes

- Tests run headless in CI, Chrome must be installed locally for local runs
- Nightwatch has deprecated `.containsText()` — this project uses `.textContains()` instead.
- Tests are executed using Chrome via ChromeDriver
- API tests run against a local mock-user-auth server
- CircleCI pipeline runs UI tests first, then API tests, and stores both reports as artifacts

---

Made by Yasmin Afifi
