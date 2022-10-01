import { CookieMessageComponent } from '../../src/lib/cookie-message/cookie-message.component';

describe('CookieMessageComponent', () => {
  it('mounts', () => {
    cy.mount(
      `
        <fds-cookie-message
            header="Fortæl os om du accepterer cookies"
            positive-text="Ja tak"
            negative-text="Nej tak"
            (positive-click)="alert('Cookies was accepted')"
            (negative-click)="alert('Cookies was not accepted')"
            >
            Vi indsamler statistik ved hjælp af cookies. Alle indsamlede data
            anonymiseres.
            <a href="#">Læs mere om vores brug af cookies.</a>
        </fds-cookie-message>`,
      {
        declarations: [CookieMessageComponent],
      }
    );
    cy.screenshot();
    cy.get('.cookie-message').should('exist');
  });
});
