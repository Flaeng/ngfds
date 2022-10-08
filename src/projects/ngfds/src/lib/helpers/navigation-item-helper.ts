import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

export class ItemSelectedEvent<T> extends Event {
  public selectedItem!: T;
}

export class NavigationItemHelper<T extends { url: string | null }> {
  constructor(
    private router: Router,
    private itemClicked: EventEmitter<ItemSelectedEvent<T>>
  ) {}

  handleClick(ev: Event, item: T): void {
    if (item.url == null) {
      ev.preventDefault();
      ev.stopPropagation();
      const event = { ...ev } as ItemSelectedEvent<T>;
      event.selectedItem = item;
      this.itemClicked.emit(event);
    } else {
      this.router.navigateByUrl(item.url);
    }
  }
}
