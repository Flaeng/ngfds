import { FunctionLinkComponent } from '../../src/lib/function-link/function-link.component';

describe('FunctionLinkComponent', () => {
  it('mounts', () => {
    cy.mount(
      `
      <fds-function-link
        icon="file-download"
        text="Download"
        (click)="alert('You clicked Download')"
      ></fds-function-link>`,
      {
        declarations: [FunctionLinkComponent],
      }
    );
    cy.screenshot();
    cy.get('fds-function-link').should('contain.text', 'Download');
    cy.get('.icon-svg').should('exist');
  });
});
