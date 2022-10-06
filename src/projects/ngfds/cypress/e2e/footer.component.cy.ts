import { FooterComponent } from '../../src/lib/footer/footer.component';

describe('FooterComponent', () => {
  it('mounts', () => {
    cy.mount(
      `
      <fds-footer>
        <ul class="mt-4 align-text-left unstyled-list inline-list">
          <li class="">
            <h1 class="h5 d-inline-block">Digitaliseringsstyrelsen</h1>
          </li>
        </ul>
      </fds-footer>`,
      {
        declarations: [FooterComponent],
      }
    );
    cy.screenshot();
    cy.get('fds-footer').should('contain.text', 'Digitaliseringsstyrelsen');
  });
});
