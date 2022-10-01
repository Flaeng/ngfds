import { CardComponent } from '../../src/lib/card/card.component';

describe('CardComponent', () => {
  it('mounts', () => {
    cy.mount(
      `
      <fds-card header="Overskrift">
        <fds-card-content>
          <p>Indhold</p>
        </fds-card-content>
      </fds-card>`,
      {
        declarations: [CardComponent],
      }
    );
    cy.screenshot();
    cy.get('.card').should('exist');
  });
});
