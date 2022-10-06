import { SkipLinkComponent } from '../../src/lib/skip-link/skip-link.component';

describe('SkipLinkComponent', () => {
  it('mounts', () => {
    cy.mount(`<fds-skip-link>Gå til sidens indhold</fds-skip-link>`, {
      declarations: [SkipLinkComponent],
    });
    cy.screenshot();
    cy.get('fds-skip-link').should('contain.text', 'Gå til sidens indhold');
  });
});
