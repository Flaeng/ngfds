import { BreadcrumbsComponent } from '../../src/lib/breadcrumbs/breadcrumbs.component';

describe('BreadcrumbsComponent', () => {
  it('mounts', () => {
    cy.mount(
      `<fds-breadcrumbs [items]="[
          { header: 'Forside', url: '#', isActive: false },
          { header: 'Komponenter', url: '#', isActive: false },
          { header: 'Brødkrumme', url: '#', isActive: true },
      ]"></fds-breadcrumbs>`,
      {
        declarations: [BreadcrumbsComponent],
      }
    );
    cy.screenshot();
    cy.get('.breadcrumbs__list-item').should('have.length', '3');
  });
});
