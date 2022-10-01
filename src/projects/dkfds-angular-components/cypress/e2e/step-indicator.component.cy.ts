import { StepIndicatorComponent } from '../../src/lib/step-indicator/step-indicator.component';

describe('StepIndicatorComponent', () => {
  it('mounts', () => {
    cy.mount(
      `
      <fds-step-indicator
        [items]="[
          { title: 'Step 1', url: null, icon: null },
          { title: 'Step 2', url: null, icon: null }
        ]"
      ></fds-step-indicator>`,
      {
        declarations: [StepIndicatorComponent],
      }
    );
    cy.screenshot();
    cy.get('fds-step-indicator').should('contain.text', 'Step 1');
    cy.get('fds-step-indicator').should('contain.text', 'Step 2');
  });
});
