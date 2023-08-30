const {
  When,
  Then,
  Given,
} = require('@badeball/cypress-cucumber-preprocessor');
import { faker } from '@faker-js/faker';

const username = faker.internet.userName();
const password = faker.internet.password({ length: 9, prefix: '*1aA' });

// There is an uncaught error being thrown by the site, while the console is clean.
// Forcing Cypress to ignore this and continue testing
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

When('I visit the registration page', () => {
  cy.visit('https://demoqa.com/register');
});

Then('I fill up the registration form', () => {
  cy.get('[id=firstname]').type(faker.person.firstName());
  cy.get('[id=lastname]').type(faker.person.lastName());
  cy.get('[id=userName]').type(faker.internet.userName());
  cy.get('[id=password]').type(faker.internet.password({ length: 10 }));
});

Then('I ignore the captcha verification and try to submit', () => {
  cy.get('[id=password]').type(faker.internet.password({ length: 10 }));
  cy.get('[id=register]').click();
});

Then(
  'An Error message should be displayed prompting the user for captcha verification',
  () => {
    cy.get('[id=name]').should('be.visible');
  }
);

When('I visit the login page', () => {
  cy.visit('https://demoqa.com/books');
  cy.wait(2000);
  cy.get('[id=login]').should('be.visible').click();
  cy.wait(2000);
});

Then('I enter credentials not stored in the DB', () => {
  cy.get('[id=userName]').type('test1234');
  cy.get('[id=password]').type('password');
  cy.get('[id=login]').click();
});

Then('I get an error message saying incorrect username and password', () => {
  cy.get('[id=name]').should('be.visible');
});

Given(
  'I send an API request with credentials to create a new account successfully.',
  () => {
    cy.request('POST', 'https://demoqa.com/Account/v1/User', {
      userName: username,
      password: password,
    }).then((response) => {
      expect(response.body).to.have.property('username', username);
    });
  }
);

Given('I am on the login page', () => {
  cy.get('[id=userName]').click();
});

When('I use the login credentials from the previous test to log in', () => {
  cy.get('[id=userName]').clear().type(username);
  cy.get('[id=password]').click().clear().type(password);
});

Then('I should be able to log in successfully', () => {
  cy.get('[id=login]').click();
  cy.get('[id=submit]').should('be.visible');
});
