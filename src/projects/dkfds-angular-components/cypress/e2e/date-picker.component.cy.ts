import { DatePickerComponent } from '../../src/lib/date-picker/date-picker.component';

describe('DatePickerComponent', () => {
  it('mounts', () => {
    cy.mount(`<fds-date-picker></fds-date-picker>`, {
      declarations: [DatePickerComponent],
    });
    cy.screenshot();
    cy.get('input').should('exist');
  });
});
