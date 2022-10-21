import { Component, Input } from '@angular/core';

@Component({
  selector: 'fds-overflow-list-item',
  templateUrl: './overflow-list-item.component.html',
})
export class OverflowListItemComponent {
  @Input()
  public link: string | null = null;
}
