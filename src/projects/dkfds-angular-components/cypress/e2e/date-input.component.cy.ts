import { DateInputComponent } from '../../src/lib/date-input/date-input.component';

describe('DateInputComponent', () => {
  it('mounts', () => {
    cy.mount(`<fds-date-input></fds-date-input>`, {
      declarations: [DateInputComponent],
    });
    cy.screenshot();
    cy.get('input').should('have.length', '3');
  });
});
