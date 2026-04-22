# Cypress E2E Saucedemo Framework

This is an end-to-end test automation framework built using Cypress and JavaScript.

## 🧠 Test Architecture

This framework is built using Page Object Model (POM) with a layered structure:

- Pages: UI interaction layer
- Commands: reusable business actions
- Fixtures: test data management
- Specs: test scenarios

This separation ensures scalability and maintainability.

## 🎯 Test Strategy

- Focus on critical user journeys:
  - Login
  - Product selection
  - Cart validation
  - Checkout flow

- E2E approach is used to validate full business flow.
- Flaky tests are minimized using Cypress best practices (no static waits).

## ⚙️ Custom Commands

- loginAsValidUser(): logs in using fixture data
- stubExternalServices(): disables external tracking APIs

## 🔄 Test Setup Strategy

beforeEach hooks are used to ensure:
- clean test state
- consistent login session
- isolation between test cases

## 🚀 CI/CD

GitHub Actions is used to:
- run Cypress tests on every push
- ensure regression safety
- validate framework stability

## ▶️ How to run

npm install
npx cypress open
