import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
//@ts-ignore
import DKFDS from 'dkfds';

@Component({
  selector: 'fds-accordion',
  templateUrl: './accordion.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AccordionComponent implements OnInit, AfterViewInit {
  @Input()
  public header: string | null = null;

  @Input('group')
  public groupName: string | null = null;

  static idGenerator: number = 1;

  id: string = 'accordion' + (AccordionComponent.idGenerator++).toString();
  accordion: DKFDS.Accordion;

  constructor(
    private _elementRef: ElementRef
  ) {
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.accordion = new DKFDS.Accordion(this._elementRef.nativeElement);
    this.accordion.init();
  }

}
