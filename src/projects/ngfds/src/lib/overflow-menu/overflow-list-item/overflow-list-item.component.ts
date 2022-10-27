import { Component, Input } from '@angular/core';

@Component({
  selector: 'fds-overflow-list-item',
  templateUrl: './overflow-list-item.component.html',
  styles: [
    `
      li.active a {
        font-weight: 600;
      }
    `,
  ],
})
export class OverflowListItemComponent {
  @Input()
  public link: string | null = null;

  @Input()
  public isActive: boolean = false;
}
