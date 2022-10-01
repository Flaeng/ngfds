import { StructuredListComponent } from '../../src/lib/structured-list/structured-list.component';
import { StructuredListItemComponent } from '../../src/lib/structured-list/structured-list-item/structured-list-item.component';

describe('StructuredListComponent', () => {
  it('mounts', () => {
    cy.mount(
      `
        <fds-structured-list>
          <fds-structured-list-item
            header="Navn"
            content="Kirsten Mønster Jensen"
          ></fds-structured-list-item>
          <fds-structured-list-item
            header="Sagsnummer"
            content="123.456"
          ></fds-structured-list-item>
        </fds-structured-list>`,
      {
        declarations: [StructuredListComponent, StructuredListItemComponent],
      }
    );
    cy.screenshot();
    cy.get('fds-structured-list').should('contain.text', 'Navn');
    cy.get('fds-structured-list').should(
      'contain.text',
      'Kirsten Mønster Jensen'
    );
    cy.get('fds-structured-list').should('contain.text', 'Sagsnummer');
    cy.get('fds-structured-list').should('contain.text', '123.456');
  });
});
