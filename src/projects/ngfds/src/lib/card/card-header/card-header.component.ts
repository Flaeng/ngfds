import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fds-card-header',
  templateUrl: './card-header.component.html',
  styles: [
    `
      .card-header {
        background: transparent;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CardHeaderComponent {}
