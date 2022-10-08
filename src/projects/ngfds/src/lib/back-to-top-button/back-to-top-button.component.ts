import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import * as DKFDS from 'dkfds';
import { DkfdsHelper } from '../helpers/dkfds-helper';

@Component({
  selector: 'fds-back-to-top-button',
  templateUrl: './back-to-top-button.component.html',
})
export class BackToTopButtonComponent implements AfterViewInit {
  @Input()
  public behavior: 'auto' | 'smooth' = 'auto';

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    DkfdsHelper.createAndInit(DKFDS.BackToTop, this.el);
  }

  anchorClicked(ev: Event): void {
    ev.preventDefault();
    ev.stopPropagation();
    document.body.scrollIntoView({ behavior: this.behavior });
  }
}
