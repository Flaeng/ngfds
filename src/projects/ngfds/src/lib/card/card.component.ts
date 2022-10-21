import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fds-card',
  templateUrl: './card.component.html',
  styles: [
    `
      .card-text {
        background: transparent;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent {
  @Input() public header: string | null = null;
  @Input() public subheader: string | null = null;
}
