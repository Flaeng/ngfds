import { ButtonComponent } from '../../src/lib/button/button.component';

describe('ButtonComponent', () => {
  it('mounts', () => {
    cy.mount(`<fds-button>Click me!</fds-button>`, {
      declarations: [ButtonComponent],
    });
    cy.screenshot();
    cy.get('button').should('have.text', 'Click me!');
  });

  it('can be styled as primary', () => {
    cy.mount(`<fds-button visual="primary">Click me!</fds-button>`, {
      declarations: [ButtonComponent],
    });
    cy.get('button').should('have.class', 'button-primary');
  });

  it('can be styled as secondary', () => {
    cy.mount(`<fds-button visual="secondary">Click me!</fds-button>`, {
      declarations: [ButtonComponent],
    });
    cy.get('button').should('have.class', 'button-secondary');
  });

  it('can be styled as tertiary', () => {
    cy.mount(`<fds-button visual="tertiary">Click me!</fds-button>`, {
      declarations: [ButtonComponent],
    });
    cy.get('button').should('have.class', 'button-tertiary');
  });

  it('can be disabled', () => {
    cy.mount(`<fds-button [disabled]="true">Click me!</fds-button>`, {
      declarations: [ButtonComponent],
    });
    cy.get('button').should('have.attr', 'disabled');
  });
    
});
