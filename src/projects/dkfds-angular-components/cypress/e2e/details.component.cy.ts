import { DetailsComponent } from '../../src/lib/details/details.component';

describe('DetailsComponent', () => {
    it('mounts', () => {
      cy.mount(`
      <fds-details header="Mere information">
          <p>
              Pellentesque nulla mi, pulvinar id blandit eu, volutpat at
              libero. Integer euismod augue leo. 
          </p>
      </fds-details>`, {
        declarations: [DetailsComponent],
      });
      cy.screenshot();
      cy.get('fds-details').should('contain.text', 'Mere information');
      cy.get('fds-details').should('contain.text', 'Pellentesque nulla mi, pulvinar id blandit eu, volutpat');
    });
});
