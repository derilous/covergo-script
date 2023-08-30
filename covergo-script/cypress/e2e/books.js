const {
  When,
  Then,
  Given,
} = require('@badeball/cypress-cucumber-preprocessor');

Given('I navigate to the book store page', () => {
  cy.visit('https://demoqa.com/profile');
  cy.get('[id=gotoStore]').click();
  cy.get('[id=searchBox-wrapper]').should('be.visible');
  cy.wait(3000);
});

Then('I add multiple books to the collection', () => {
  cy.get('[id="see-book-Git Pocket Guide"]').children().click({
    force: true,
  });
  cy.get('[id=userName-value]').contains('Richard E. Silverman');
  cy.get('[id=addNewRecordButton]').eq(1).click({ force: true });
  cy.on('window:alert', (alertText) => {
    // Use assertions to validate the alert text
    expect(alertText).to.equal('Book added to your collection.');
  });
  cy.visit('https://demoqa.com/books');
  cy.get('[id="see-book-Learning JavaScript Design Patterns"]')
    .children()
    .click({
      force: true,
    });
  cy.get('[id=userName-value]').contains('Addy Osmani');
  cy.get('[id=addNewRecordButton]').eq(1).click({ force: true });
  cy.on('window:alert', (alertText) => {
    // Use assertions to validate the alert text
    expect(alertText).to.equal('Book added to your collection.');
  });
  cy.wait(500);
  cy.get('[id=addNewRecordButton]').eq(0).click({ force: true });
  cy.get('[id="see-book-Programming JavaScript Applications"]')
    .children()
    .click({
      force: true,
    });
  cy.get('[id=userName-value]').contains('Eric Elliott');
  cy.get('[id=addNewRecordButton]').eq(1).click({ force: true });
  cy.on('window:alert', (alertText) => {
    // Use assertions to validate the alert text
    expect(alertText).to.equal('Book added to your collection.');
  });
  cy.wait(500);
});

When('I go to my profile page', () => {
  cy.visit('https://demoqa.com/profile');
});

Then('My added books should be visible', () => {
  cy.get('[id="see-book-Git Pocket Guide"]').should('be.visible');
  cy.get('[id="see-book-Learning JavaScript Design Patterns"]').should(
    'be.visible'
  );
  cy.get('[id="see-book-Programming JavaScript Applications"]').should(
    'be.visible'
  );
});

Given('I navigate to the book store page again', () => {
  cy.visit('https://demoqa.com/books');
});

Then('I select a book that has already been added to collection', () => {
  cy.get('[id="see-book-Learning JavaScript Design Patterns"]')
    .children()
    .click({
      force: true,
    });
});

When('I try to add aforementioned book to collection again', () => {
  cy.get('[id=addNewRecordButton]').eq(1).click({ force: true });
});

Then(
  'I get an error alert saying Book has already been added to collection',
  () => {
    cy.on('window:alert', (alertText) => {
      // Use assertions to validate the alert text
      expect(alertText).to.contain(
        'Book already present in the your collection'
      );
    });
  }
);

Given('I am on the profile page', () => {
  cy.visit('https://demoqa.com/profile');
});

When('I click the delete icon on the first book', () => {
  cy.get('[id="delete-record-undefined"]').eq(0).children().click();
});

Then('I click cancel on the confirmation modal', () => {
  cy.get('[id="closeSmallModal-cancel"]').click();
  cy.wait(200);
  cy.get('[id="closeSmallModal-cancel"]').should('not.exist');
});

Then('The book should still be visible in the collection', () => {
  cy.get('[id="see-book-Git Pocket Guide"]').should('be.visible');
});

When('I click the delete icon on the first book again', () => {
  cy.get('[id="delete-record-undefined"]').eq(0).children().click();
});

Then('I confirm the action on the confirmation modal', () => {
  cy.get('[id="closeSmallModal-ok"]').click();
});

Then('The book should be deleted from the user collection', () => {
  cy.on('window:alert', (alertText) => {
    expect(alertText).to.contain('Book deleted.');
  });
  cy.wait(200);
  cy.reload();
  cy.get('[id="see-book-Git Pocket Guide"]').should('not.exist');
});

When('I click on the Delete All Books button', () => {
  cy.get('[id=submit]').eq(3).click({ force: true });
});

Then('I confirm on the confirmation modal', () => {
  cy.get('[id=closeSmallModal-ok]').click();
});

Then('All books in the collection must be deleted', () => {
  cy.on('window:alert', (alertText) => {
    expect(alertText).to.equal('All books deleted');
  });
  // Assert all books deleted
  cy.reload();
  cy.get('[id="delete-record-undefined"]').should('not.exist');
});

When(
  'I click the delete all books button after there are no books in the collection',
  () => {
    cy.get('[id=submit]').eq(3).click({ force: true });
  }
);

Then('I click confirm on the confirmation modal', () => {
  cy.get('[id=closeSmallModal-ok]').click();
});

Then(
  'I get an error alert reporting there are no books available in collection to be deleted',
  () => {
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contain('No books available in your collection');
    });
  }
);
