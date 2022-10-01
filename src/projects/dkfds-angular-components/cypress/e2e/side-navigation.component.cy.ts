import { SideNavigationComponent } from '../../src/lib/side-navigation/side-navigation.component';

describe('SideNavigationComponent', () => {
    it('mounts', () => {
      cy.mount(
        `
        <fds-side-navigation [items]="[
          { url: '#', title: 'Page 1', subtitle: null, isActive: false, children: null },
          { url: '#', title: 'Page 2', subtitle: null, isActive: false, children: null },
          { url: '#', title: 'Page 3', subtitle: null, isActive: true, children: null },
          { url: '#', title: 'Page 4', subtitle: null, isActive: false, children: null },
        ]"></fds-side-navigation>`,
        {
          declarations: [SideNavigationComponent],
        }
      );
      cy.screenshot();
      cy.get('fds-side-navigation').should('contain.text', 'Page 1');
      cy.get('fds-side-navigation').should('contain.text', 'Page 2');
      cy.get('fds-side-navigation').should('contain.text', 'Page 3');
      cy.get('fds-side-navigation').should('contain.text', 'Page 4');
    });
});
