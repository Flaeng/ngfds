import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fds-card-content',
  templateUrl: './card-content.component.html',
  styles: [
    `
      .card-text {
        background: transparent;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CardContentComponent {}
