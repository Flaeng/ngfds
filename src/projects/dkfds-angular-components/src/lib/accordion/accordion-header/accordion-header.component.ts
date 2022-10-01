import { Component, Input, Optional, ViewEncapsulation } from '@angular/core';
import { AccordionComponent } from '../accordion.component';

@Component({
  selector: 'fds-accordion-header',
  templateUrl: './accordion-header.component.html',
  styleUrls: ['./accordion-header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccordionHeaderComponent {

  @Input()
  public icon: string | null = null;

  @Input('icon-text')
  public iconText: string | null = null;

  parentId: string;

  constructor(
    @Optional () parent: AccordionComponent
  ) {
    this.parentId = parent.id;
   }

}
