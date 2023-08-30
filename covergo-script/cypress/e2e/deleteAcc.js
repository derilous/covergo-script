const {
  When,
  Then,
  Given,
} = require('@badeball/cypress-cucumber-preprocessor');

Given('I am on the profile page', () => {
  cy.visit('https://demoqa.com/profile');
});

Then('I click the delete account button', () => {
  cy.get('[id=submit]').eq(2).click({ force: true });
});

Then('I click the cancel button on the confirmation modal', () => {
  cy.get('[id=closeSmallModal-cancel]').click();
});

Then('I should still be signed into the account I was trying to delete', () => {
  cy.get('[id=userName-value]').should('be.visible');
});

When('I click on the delete account button', () => {
  cy.get('[id=submit]').eq(2).click({ force: true });
});

Then('I confirm delete account on the confirmation modal', () => {
  cy.get('[id=closeSmallModal-ok]').click();
});

Then('I get an alert saying the account has been deleted', () => {
  cy.on('window:alert', (alertText) => {
    expect(alertText).to.equal('User Deleted.');
  });
});
