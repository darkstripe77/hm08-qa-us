# HM08-QA-US: Taxi Service Test Automation

## Project Description
This project is an automated end-to-end testing suite designed to test the user flow for ordering a taxi in a fictional taxi service web application. The tests simulate various actions such as entering the pick-up and drop-off addresses, selecting a support plan, filling in user information (like phone number and payment details), and placing an order with extra services like blankets and handkerchiefs. The project ensures that the functionality of the taxi ordering system works as intended and that the user interactions behave correctly across the application.

## Technologies and Techniques Used
- **WebdriverIO**: A next-generation browser and mobile automation framework for Node.js.
- **JavaScript (ES6)**: The main programming language used to write the test automation.
- **Mocha & Chai**: Used as the testing framework and assertion library for the tests.
- **Node.js**: Provides the runtime for running JavaScript outside of the browser.
- **Selectors and Locators**: Used various types of locators such as CSS selectors, XPath, and ID selectors to interact with elements.
- **Assertions**: Used Chai assertions to verify the functionality of the application.
- **Wait Functions**: Used wait functions to ensure elements are fully loaded before interacting with them.

## Instructions on How to Run the Tests

### Prerequisites
Before you run the tests, make sure you have the following installed on your system:
- **Node.js** (version 14 or higher)
- **NPM** (Node Package Manager)

You can install Node.js and NPM from [here](https://nodejs.org/).

### Steps to Run the Tests

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/your-repo/hm08-qa-us.git
    cd hm08-qa-us
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. To run the tests, execute the following command:
    ```bash
    npm test
    ```

4. You can modify the base URL of the application in `wdio.conf.js` if needed, by adjusting the `baseUrl` property. This file is located in the root of the project, and you can update the `baseUrl` to point to the appropriate environment (e.g., development, staging, or production).

## Code Style & Best Practices
- **Variable Declarations**: `let` is used for variables whose value changes, and `const` is used for constants.
- **Naming Conventions**: All function and variable names use camelCase, and functions are named descriptively to reflect their purpose (e.g., `callTaxi`, `selectSupportivePlan`).
- **Modules**: Code is modularized, with helper functions separated into different files for better maintainability.

## Notes
- Ensure that all necessary services (such as the taxi application backend) are running before executing the tests.
- The project uses different types of element locators (CSS, XPath, ID) to maximize flexibility and ensure proper coverage of UI elements.
