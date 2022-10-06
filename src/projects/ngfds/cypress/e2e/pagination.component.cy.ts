import { PaginationComponent } from '../../src/lib/pagination/pagination.component';

describe('PaginationComponent', () => {
    it('mounts', () => {
      cy.mount(`<fds-pagination [current-page]="1" [page-count]="2"></fds-pagination>`, {
        declarations: [PaginationComponent],
      });
      cy.screenshot();
      cy.get('fds-pagination').should('contain.text', '1');
      cy.get('fds-pagination').should('contain.text', '2');
    });
});
