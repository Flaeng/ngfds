import { Component, Input, Optional, ViewEncapsulation } from '@angular/core';
import { AccordionComponent } from '../accordion.component';

@Component({
  selector: 'fds-accordion-content',
  templateUrl: './accordion-content.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AccordionContentComponent {
  @Input('no-padding')
  public noPadding = false;

  parentId: string;

  constructor(@Optional() parent: AccordionComponent) {
    this.parentId = parent.id;
  }
}
