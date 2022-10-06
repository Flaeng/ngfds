import { AccordionComponent } from '../../src/lib/accordion/accordion.component';
import { AccordionHeaderComponent } from '../../src/lib/accordion/accordion-header/accordion-header.component';
import { AccordionContentComponent } from '../../src/lib/accordion/accordion-content/accordion-content.component';
import constants from '../support/constants';

describe('AccordionComponent', () => {
  constants.desktopViewports.forEach((size) => {
    context(`desktop (${size[0]}x${size[1]})`, () => {
      beforeEach(() => cy.viewport(size[0], size[1]));

      it('mounts', () => {
        cy.mount(
          `
        <fds-accordion header="AccHeader">
            <fds-accordion-content>
                Indhold
            </fds-accordion-content>
        </fds-accordion>`,
          {
            declarations: [
              AccordionComponent,
              AccordionHeaderComponent,
              AccordionContentComponent,
            ],
          }
        );
        cy.screenshot();
        cy.get('.accordion-button').click();
        cy.get('.accordion-button').should('have.text', 'AccHeader');
        cy.get('.accordion-content').should('contain.text', 'Indhold');
      });
    });
  });

  it('mounts', () => {
    cy.mount(
      `
    <fds-accordion header="AccHeader">
        <fds-accordion-content>
            Indhold
        </fds-accordion-content>
    </fds-accordion>`,
      {
        declarations: [
          AccordionComponent,
          AccordionHeaderComponent,
          AccordionContentComponent,
        ],
      }
    );
    cy.screenshot();
    cy.get('.accordion-button').click();
    cy.get('.accordion-button').should('have.text', 'AccHeader');
    cy.get('.accordion-content').should('contain.text', 'Indhold');
  });

  it('can be shown and hidden', () => {
    cy.mount(
      `
        <fds-accordion header="AccHeader">
            <fds-accordion-content>
                Indhold
            </fds-accordion-content>
        </fds-accordion>`,
      {
        declarations: [
          AccordionComponent,
          AccordionHeaderComponent,
          AccordionContentComponent,
        ],
      }
    );
    cy.get('.accordion-button').should('have.text', 'AccHeader');
    cy.get('.accordion-button').click();
    cy.get('.accordion-button').should('have.text', 'AccHeader');
    cy.get('.accordion-content').should('contain.text', 'Indhold');
    cy.get('.accordion-button').click();
    cy.get('.accordion-content').should('not.be.visible');
    cy.get('.accordion-button').click();
    cy.get('.accordion-content').should('be.visible');
  });

  it('can render custom header', () => {
    cy.mount(
      `
        <fds-accordion>
            <fds-accordion-header>
                <b>CUSTOM_HEADER</b>
            </fds-accordion-header>
            <fds-accordion-content>
                Indhold
            </fds-accordion-content>
        </fds-accordion>`,
      {
        declarations: [
          AccordionComponent,
          AccordionHeaderComponent,
          AccordionContentComponent,
        ],
      }
    );
    cy.get('.accordion-button').should('have.text', 'CUSTOM_HEADER');
    cy.get('.accordion-button').should('contain.html', '<b>');
    cy.get('.accordion-button').should('contain.html', '</b>');
  });
});
