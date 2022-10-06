import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  ItemSelectedEvent,
  NavigationItemHelper,
} from '../helpers/navigation-item-helper';
import * as DKFDS from 'dkfds';

@Component({
  selector: 'fds-overflow-menu',
  templateUrl: './overflow-menu.component.html',
})
export class OverflowMenuComponent implements AfterViewInit {
  @Input()
  public items: IOverflowNavigationItem[] = [];

  @Input()
  public placeholder = '';

  @Input('selected-item')
  public selectedItem: IOverflowNavigationItem | null = null;

  @Input('hide-icon')
  public hideIcon = false;

  @Input()
  public icon = 'more-vert';

  @Output('item-clicked')
  public itemClicked: EventEmitter<ItemSelectedEvent<IOverflowNavigationItem>> =
    new EventEmitter();

  static idGenerator = 1;

  id: string = (OverflowMenuComponent.idGenerator++).toString();
  helper: NavigationItemHelper<IOverflowNavigationItem>;

  constructor(router: Router, private element: ElementRef) {
    this.helper = new NavigationItemHelper<IOverflowNavigationItem>(
      router,
      this.itemClicked
    );
  }

  onItemClicked(ev: Event, item: IOverflowNavigationItem): void {
    this.helper.handleClick(ev, item);
  }
  ngAfterViewInit(): void {
    const elem: Element = this.element.nativeElement;
    const trigger = elem.querySelector<HTMLButtonElement>('.js-dropdown');
    if (trigger) {
      const dropdown = new DKFDS.Dropdown(trigger);
      dropdown.init();
    }
  }
}

export interface IOverflowNavigationItem {
  title: string;
  url: string | null;
}
export class OverflowNavigationItem implements IOverflowNavigationItem {
  public title = '';
  public url: string | null = null;

  constructor(values: Partial<OverflowNavigationItem>) {
    Object.assign(this, values);
  }
}
