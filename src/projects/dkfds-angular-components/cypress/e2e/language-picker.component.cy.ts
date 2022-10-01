import { LanguagePickerComponent } from '../../src/lib/language-picker/language-picker.component';

describe('LanguagePickerComponent', () => {
  it('mounts', () => {
    cy.mount(
      `
    <fds-language-picker
    [items]="[
      {
        nativeLanguageName: 'Dansk',
        currentLanguageName: 'Dansk',
        iso639dash1code: 'da',
        isActive: true
      },
      {
        nativeLanguageName: 'English',
        currentLanguageName: 'Engelsk',
        iso639dash1code: 'en-gb',
        isActive: false
      }
    ]"
  ></fds-language-picker>`,
      {
        declarations: [LanguagePickerComponent],
      }
    );
    cy.screenshot();
    cy.get('fds-language-picker').should('contain.text', 'Dansk');
    cy.get('fds-language-picker').should('contain.text', 'English');
  });
});
