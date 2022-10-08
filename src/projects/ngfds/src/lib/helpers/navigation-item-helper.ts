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

  handleClick(ev: Event, selectedItem: T): void {
    if (selectedItem.url == null) {
      ev.preventDefault();
      ev.stopPropagation();
      const event: ItemSelectedEvent<T> = { ...ev, selectedItem };
      this.itemClicked.emit(event);
    } else {
      this.router.navigateByUrl(selectedItem.url);
    }
  }
}
