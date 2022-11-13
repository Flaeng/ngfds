describe('can use badges', () => {
  before(() => {
    cy.visit('http://localhost:4200/#/badges');
  });

  it('is visible', () => {
    cy.get('main .badge').should('be.visible');
  });

  it('is has correct styling by default', () => {
    cy.get('main .badge-')
      .should('have.css', 'background-color', 'rgb(26, 26, 26)')
      .and('have.css', 'color', 'rgb(255, 255, 255)');
  });

  it('is has correct styling for success', () => {
    cy.get('main .badge-success')
      .should('have.css', 'background-color', 'rgb(238, 255, 226)')
      .and('have.css', 'color', 'rgb(26, 26, 26)');
  });

  it('is has correct styling for info', () => {
    cy.get('main .badge-info')
      .should('have.css', 'background-color', 'rgb(226, 242, 251)')
      .and('have.css', 'color', 'rgb(26, 26, 26)');
  });

  it('is has correct styling for warning', () => {
    cy.get('main .badge-warning')
      .should('have.css', 'background-color', 'rgb(255, 238, 204)')
      .and('have.css', 'color', 'rgb(26, 26, 26)');
  });

  it('is has correct styling for error', () => {
    cy.get('main .badge-error')
      .should('have.css', 'background-color', 'rgb(255, 224, 224)')
      .and('have.css', 'color', 'rgb(26, 26, 26)');
  });

  it('shows text for default badge', () => {
    cy.get('main .badge:not(.badge-large):not(.badge-small)')
      .eq(0)
      .should('contain.text', 'Normal badge');
  });

  it('shows text for small badge', () => {
    cy.get('main .badge.badge-small')
      .eq(0)
      .should('contain.text', 'Lille badge');
  });

  it('shows text for large badge', () => {
    cy.get('main .badge.badge-large')
      .eq(0)
      .should('contain.text', 'Stort badge');
  });
});
