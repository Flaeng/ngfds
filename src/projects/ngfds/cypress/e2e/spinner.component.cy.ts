import { SpinnerComponent } from '../../src/lib/spinner/spinner.component';

describe('SpinnerComponent', () => {
  it('mounts', () => {
    cy.mount(`<fds-spinner></fds-spinner>`, {
      declarations: [SpinnerComponent],
    });
    cy.screenshot();
    cy.get('fds-spinner .spinner').should('be.visible');
    cy.get('fds-spinner').should('contain.text', 'Arbejder');
    cy.wait(5000);
    cy.screenshot();
  });
});
