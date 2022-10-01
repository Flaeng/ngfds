import { TagComponent } from '../../src/lib/tag/tag.component';

describe('TagComponent', () => {
    it('mounts', () => {
      cy.mount(`<fds-tag>Hello</fds-tag>`,
        {
          declarations: [TagComponent],
        }
      );
      cy.screenshot();
      cy.get('fds-tag').should('contain.text', 'Hello');
    });
});
