import { TooltipDirective } from '../../src/lib/tooltip/tooltip.directive';

describe('TooltipDirective', () => {
  it('mounts', () => {
    cy.mount(`<button fds-tooltip="Hello">Click me!</button>`, {
      declarations: [TooltipDirective],
    });
    cy.screenshot();
    cy.get('.tooltip-popper').should('not.exist');
    cy.get('button[fds-tooltip]').should('exist');
    cy.get('button[fds-tooltip]').trigger('mouseenter');
    cy.get('.tooltip-popper').should('be.visible');
    cy.get('.tooltip-popper').should('have.text', 'Hello');
    cy.screenshot();
    cy.get('button[fds-tooltip]').trigger('mouseleave');
    cy.get('.tooltip-popper').should('not.exist');
  });
});
