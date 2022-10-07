import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import * as DKFDS from 'dkfds';
import { DkfdsHelper } from '../helpers/dkfds-helper';

@Component({
  selector: 'fds-accordion',
  templateUrl: './accordion.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AccordionComponent implements AfterViewInit {
  @Input()
  public header: string | null = null;
  
  @Input("icon")
  public headerIcon: string | null = null;

  @Input('icon-text')
  public headerIconText: string | null = null;

  @Input('group')
  public groupName: string | null = null;

  static idGenerator = 1;

  id: string = 'accordion' + (AccordionComponent.idGenerator++).toString();
  
  public accordion: DKFDS.Accordion | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.accordion = DkfdsHelper.createAndInit(DKFDS.Accordion, this.el);
  }
}
