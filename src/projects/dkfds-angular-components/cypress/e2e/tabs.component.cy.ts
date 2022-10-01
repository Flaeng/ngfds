import { TabContentComponent } from '../../src/lib/tabs/tab-content/tab-content.component';
import { TabSelectorComponent } from '../../src/lib/tabs/tab-selector/tab-selector.component';
import { TabComponent } from '../../src/lib/tabs/tab/tab.component';
import { TabsComponent } from '../../src/lib/tabs/tabs.component';

describe('TabsComponent', () => {
    it('mounts', () => {
      cy.mount(
        `
        <fds-tabs>
          <fds-tab header="Fane 1">
            <h2>Indhold 1</h2>
            <p>
              Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue,
              ac lacinia nisl dolor et augue. Ut lorem massa, consequat ut orci sit
              amet, maximus dictum orci. Mauris pharetra nunc sed augue bibendum
              semper. Donec in cursus orci. Ut sed posuere elit, quis semper turpis.
              Curabitur malesuada nisi nec nisl facilisis ornare. Praesent
              vestibulum, velit id sollicitudin auctor, ipsum lacus auctor nisl, in
              lacinia sem massa eget urna.
            </p>
          </fds-tab>
          <fds-tab header="Fane 2">
            <h2>Indhold 2</h2>
            <p>
              Mauris tempor, tellus a laoreet finibus, neque metus hendrerit augue,
              ac lacinia nisl dolor et augue. Ut lorem massa, consequat ut orci sit
              amet, maximus dictum orci. Mauris pharetra nunc sed augue bibendum
              semper. Donec in cursus orci. Ut sed posuere elit, quis semper turpis.
              Curabitur malesuada nisi nec nisl facilisis ornare. Praesent
              vestibulum, velit id sollicitudin auctor, ipsum lacus auctor nisl, in
              lacinia sem massa eget urna.
            </p>
          </fds-tab>
        </fds-tabs>`,
        {
          declarations: [TabsComponent, TabComponent, TabSelectorComponent, TabContentComponent],
        }
      );
      cy.screenshot();
      cy.get('fds-tabs').should('include.text', 'Fane 1');
      cy.get('fds-tabs').should('include.text', 'Indhold 1');
      cy.get('fds-tabs').should('include.text', 'Fane 2');
      cy.get('fds-tabs').should('include.text', 'Indhold 2');
    });
});
