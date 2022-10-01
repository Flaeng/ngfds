import { LinkComponent } from '../../src/lib/link/link.component';

describe('LinkComponent', () => {
    it('mounts', () => {
      cy.mount(`<fds-link href="#">Hello</fds-link>`, {
        declarations: [LinkComponent],
      });
      cy.screenshot();
      cy.get('fds-link').should('contain.text', 'Hello');
    });
});
