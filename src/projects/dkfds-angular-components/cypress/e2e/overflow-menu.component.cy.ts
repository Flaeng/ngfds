import { OverflowMenuComponent } from '../../src/lib/overflow-menu/overflow-menu.component';

describe('OverflowMenuComponent', () => {
  it('mounts', () => {
    cy.mount(`<fds-overflow-menu placeholder="Hello"></fds-overflow-menu>`, {
      declarations: [OverflowMenuComponent],
    });
    cy.get('fds-overflow-menu').should('contain.text', 'Hello');
  });
  it('can change value', () => {
    cy.mount(
      `
    <fds-overflow-menu
        [items]="[
            { title: 'Valgmulighed #1', url: null },
            { title: 'Valgmulighed #2', url: null },
            { title: 'Valgmulighed #3', url: null },
        ]"
        (item-clicked)="alert('You press: ' + $event.selectedItem.title)"
    ></fds-overflow-menu>`,
      {
        declarations: [OverflowMenuComponent],
      }
    );
    cy.screenshot();
    cy.get('fds-overflow-menu').click();
    cy.get('fds-overflow-menu').should('contain.text', 'Valgmulighed #1');
    cy.get('fds-overflow-menu').should('contain.text', 'Valgmulighed #2');
    cy.get('fds-overflow-menu').should('contain.text', 'Valgmulighed #3');
  });
});
