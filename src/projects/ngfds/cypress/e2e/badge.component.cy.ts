import { BadgeComponent } from '../../src/lib/badge/badge.component';

describe('BadgeComponent', () => {
  it('mounts', () => {
    cy.mount(`<fds-badge>Hello</fds-badge>`, {
      declarations: [BadgeComponent],
    });
    cy.screenshot();
    cy.get('.badge').should('exist');
  });
});
