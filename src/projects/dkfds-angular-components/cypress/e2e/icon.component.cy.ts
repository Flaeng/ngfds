import { IconComponent } from '../../src/lib/icon/icon.component';

describe('IconComponent', () => {
  it('mounts', () => {
    cy.mount(`<fds-icon icon="file-download"></fds-icon>`, {
      declarations: [IconComponent],
    });
    cy.screenshot();
    cy.get('.icon-svg').should('exist');
  });
});
