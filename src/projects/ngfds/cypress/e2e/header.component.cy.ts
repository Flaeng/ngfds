import { HeaderComponent } from '../../src/lib/header/header.component';
import { PortalHeaderComponent } from '../../src/lib/header/portal-header/portal-header.component';
import { SolutionHeaderComponent } from '../../src/lib/header/solution-header/solution-header.component';

describe('HeaderComponent', () => {
  it('mounts', () => {
    cy.mount(
      `
      <fds-header>
        <fds-skip-link>Gå til sidens indhold</fds-skip-link>
        <fds-portal-header
          logo="/assets/borger-logo.svg"
          portal-name="Portal"
        ></fds-portal-header>
        <fds-solution-header
          header="Løsningstitel #1"
        ></fds-solution-header>
      </fds-header>`,
      {
        declarations: [HeaderComponent, PortalHeaderComponent, SolutionHeaderComponent],
      }
    );
    cy.screenshot();
    cy.get('fds-skip-link').should('contain.text', 'Gå til sidens indhold');
    cy.get('fds-header').should('contain.text', 'Portal');
    cy.get('fds-header').should('contain.text', 'Løsningstitel #1');
  });
});
