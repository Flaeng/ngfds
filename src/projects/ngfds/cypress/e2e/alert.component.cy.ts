import { AlertComponent } from '../../src/lib/alert/alert.component';

describe('AlertComponent', () => {
  it('mounts', () => {
    cy.mount(`<fds-alert>Hey</fds-alert>`, {
      declarations: [
        AlertComponent
      ]
    });
    cy.screenshot();
    cy.get('fds-alert').should('exist');
    cy.get('fds-alert').should('contain.text', 'Hey');
  });
  
  it('does not have close button by default', () => {
    cy.mount(`<fds-alert>Hey</fds-alert>`, {
      declarations: [
        AlertComponent
      ]
    });
    cy.get('.alert-close').should('not.exist');
  });
});
