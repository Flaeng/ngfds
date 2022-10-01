import { TextareaComponent } from '../../src/lib/textarea/textarea.component';

describe('TextareaComponent', () => {
  it('mounts', () => {
    cy.mount(`<fds-textarea></fds-textarea>`, {
      declarations: [TextareaComponent],
    });
    cy.screenshot();
    cy.get('fds-textarea textarea').should('exist');
  });
});
