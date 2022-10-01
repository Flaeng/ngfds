import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewEncapsulation,
} from '@angular/core';
//@ts-ignore
import DKFDS from 'dkfds';

@Component({
  selector: 'fds-accordion',
  templateUrl: './accordion.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AccordionComponent implements AfterViewInit {
  @Input()
  public header: string | null = null;

  @Input('group')
  public groupName: string | null = null;

  static idGenerator = 1;

  id: string = 'accordion' + (AccordionComponent.idGenerator++).toString();
  accordion: DKFDS.Accordion;

  constructor(private _elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.accordion = new DKFDS.Accordion(this._elementRef.nativeElement);
    this.accordion.init();
  }
}
