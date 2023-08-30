describe('Delete Account', () => {
  it('Should be able to cancel delete user account', () => {
    cy.visit('https://demoqa.com/profile');
    cy.get('[id=submit]').eq(2).click({ force: true });
    cy.get('[id=closeSmallModal-cancel]').click();
    // validate account not deleted
    cy.get('[id=userName-value]').should('be.visible');
  });

  it('Should be able to delete user account', () => {
    cy.get('[id=submit]').eq(2).click({ force: true });
    cy.get('[id=closeSmallModal-ok]').click();
    // validate account not deleted
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('User Deleted.');
    });
  });
});
