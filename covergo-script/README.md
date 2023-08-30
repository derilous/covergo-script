# Project README

This project is aimed at testing various functions and features of the demoQA website. It includes end-to-end tests that focus on the following key areas:

- Authentication and Registration Flows
- Book Collection Manipulation
- Account Deletion Flows

### About the Project

The purpose of this project is to thoroughly test the functionality and behavior of the demoQA website. By implementing end-to-end tests for selected functions and features, we aim to ensure that the website functions as intended and delivers a seamless user experience.

Test Scenarios

1. Authentication and Registration Flows
   This section of tests focuses on the user authentication and registration processes. The following scenarios will be tested:

User Registration: Verify that new users can successfully register on the demoQA website via API.

User Login: Ensure that registered users can log in using their credentials.

Authentication Errors: Test for various error cases during authentication, such as incorrect passwords or non-existent accounts.

2. Book Collection Manipulation
   In this section, tests are designed to validate the manipulation of books within the user's collection. The following test cases will be covered:

Add Book: Verify that users can add new books to their collection.

Remove Book: Ensure that users are able to remove books from their collection.

Add book error scenario: Verify that a book once added to an account cannpt be added again.

3. Account Deletion Flows
   This set of tests focuses on the account deletion process:

Account Deletion: Verify that users can initiate the account deletion process.

Confirmation and Cancellation: Test the confirmation and cancellation steps during account deletion.

Tools and Technologies
The tests in this project are implemented using the following tools and technologies:

Testing Framework: [Choose Testing Framework] (e.g., Selenium, Cypress)

Programming Language: [Choose Programming Language] (e.g., Java, JavaScript)

## Getting Started

To run the tests locally on your machine, follow these steps:

Clone this repository: git clone https://github.com/delrilous/covergo-script

Install the required dependencies using yarn

Execute the tests using the provided test runner command: yarn cypress open

Configure Cypress upon first start and select `run all tests` in the e2e window.

Contributions
We welcome contributions to enhance the test coverage and improve the project. If you would like to contribute, please follow these steps:

Fork the repository.

Create a new branch for your feature or bug fix: git checkout -b feature/your-feature-name

Make your modifications and commit changes: git commit -am 'Add your commit message'

Push the branch to your forked repository.

Open a pull request, describing the changes you've made.

Contact
If you have any questions or suggestions regarding the project, please feel free to contact Mohsin Habiya at [mohsin.salim567@gmail.com].

By participating in this project, you agree to abide by the general open source Code of conduct, fostering an inclusive and respectful community.
