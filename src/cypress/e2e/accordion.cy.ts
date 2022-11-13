describe('can use accordion', () => {

  before(() => {
    cy.visit('http://localhost:4200/#/accordions');
  });

  it('is closed by default', () => {
    cy.get('.accordion-content').should('not.be.visible');
    cy.get('.accordion-button').should('be.visible');
  });

  it('can open on click', () => {
    cy.get('[aria-controls="accordion1"]').click();
    cy.get('.accordion-content#accordion1').should('be.visible');
  });

  it('will close on click when opened', () => {
    cy.get('[aria-controls="accordion1"]').click();
    cy.get('.accordion-content#accordion1').should('not.be.visible');
  });
});
