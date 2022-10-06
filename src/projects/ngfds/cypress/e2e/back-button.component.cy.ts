import { BackButtonComponent } from '../../src/lib/back-button/back-button.component';

describe('BackButtonComponent', () => {
  it('mounts', () => {
    cy.mount(`<fds-back-button></fds-back-button>`, {
      declarations: [BackButtonComponent],
    });
    cy.screenshot();
    cy.get('.back-link').should('exist');
  });
});
