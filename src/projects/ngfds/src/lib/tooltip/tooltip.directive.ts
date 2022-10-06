import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import * as DKFDS from 'dkfds';

@Directive({
  selector: '[fds-tooltip]',
})
export class TooltipDirective implements OnInit {
  @Input('fds-tooltip')
  public tooltip: string | null = null;
  
  @Input('fds-tooltip-position')
  public tooltipPosition: 'top' | 'bottom' = 'top';

  constructor(private elem: ElementRef) {}

  ngOnInit(): void {
    if (this.tooltip == null) {
      this.elem.nativeElement.removeAttribute('data-tooltip');
      return;
    }

    const text = this.tooltip.replace(/g\n/, '<br />');
    this.elem.nativeElement.setAttribute('data-tooltip', text);
    this.elem.nativeElement.setAttribute('data-tooltip-position', this.tooltipPosition);
    const tooltip = new DKFDS.Tooltip(this.elem.nativeElement);
    tooltip.init();
  }
}
