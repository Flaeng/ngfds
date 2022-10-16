import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fds-card',
  templateUrl: './card.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent {
  @Input() public header: string | null = null;
  @Input() public subheader: string | null = null;
}
