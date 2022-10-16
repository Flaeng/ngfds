import { Component, Input, Optional, ViewEncapsulation } from '@angular/core';
import { AccordionComponent } from '../accordion.component';

@Component({
  selector: 'fds-accordion-header',
  templateUrl: './accordion-header.component.html',
  styles: [
    `
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-top: 0;
        margin-bottom: 0;
        letter-spacing: normal;
        max-width: none;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AccordionHeaderComponent {
  @Input()
  public icon: string | null = null;

  @Input('icon-text')
  public iconText: string | null = null;

  parentId: string;

  constructor(@Optional() parent: AccordionComponent) {
    this.parentId = parent.id;
  }
}
