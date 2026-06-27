#  Playwright Automation Framework

A scalable end-to-end UI automation framework built with **Playwright** and **TypeScript**, following industry best practices such as **Page Object Model (POM)**, **Custom Fixtures**, **Environment Configuration**, and **Data-Driven Testing**.

---

#  Features

-  Playwright with TypeScript
-  Page Object Model (POM)
-  Custom Fixtures
-  Data-Driven Testing
-  Environment Management (.env)
-  Cross Browser Support
-  HTML Report
-  Screenshot on Failure
-  Video Recording on Failure
-  Trace Collection
-  Modular Project Structure
-  Reusable Page Classes
-  Tag Based Test Execution
-  Easy CI/CD Integration

---

#  Project Structure

```
.
├── .github/
│   └── workflows/
│
├── data/
│   └── ui-data/
│
├── env-files/
│   ├── .env.demo
│   ├── .env.prod
│
├── fixtures/
│   └── pom-fixture.ts
│
├── pages/
│   ├── LoginPage.ts
│   ├── RegisterPage.ts
│   ├── FileUploadPage.ts
│   ├── DatatablePage.ts
│   └── MultistepFormPage.ts
│
├── testdata/
│
├── tests/
│   └── ui-tests/
│
├── utils/
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

#  Prerequisites

Before running the project, ensure the following are installed:

- Node.js (v18 or above)
- Visual Studio Code
- Git

---

#  Installation

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

#  Environment Configuration

This framework supports multiple environments.

Example:

```
env-files/

.env.demo

.env.prod
```
---

#  Running Tests

Run all tests
```
Run specific test
```bash
npx playwright test tests/ui-tests/login-module.spec.ts
```

Run tests with tag

```bash
npx playwright test --grep "@UI"
```

---

---

# Modules Covered

- Login Module
- Registration Module
- File Upload Module
- Data Table Module
- Multi Step Form Module

---

#  CI/CD

The framework is designed to integrate easily with

- GitHub Actions
- Jenkins
---

#  Sample Report

```
playwright-report/

index.html
```

Open the report

```bash
npx playwright show-report