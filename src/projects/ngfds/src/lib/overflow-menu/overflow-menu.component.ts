import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { AngularHelper } from '../helpers/angular-helper';
import { ItemSelectedEvent } from '../helpers/navigation-item-helper';

type OverflowItem = TitledItem | TitledLinkItem;
type TitledItem = { title: string };
type TitledLinkItem = { title: string; url: string };

@Component({
  selector: 'fds-overflow-menu',
  templateUrl: './overflow-menu.component.html',
})
export class OverflowMenuComponent {
  @Input()
  public direction: 'left' | 'right' = 'right';

  @Input()
  public placeholder: string = '';

  @Input()
  public items: OverflowItem[] = [];

  @Input('selected-item')
  public selectedItem: OverflowItem | null = null;

  @Input('hide-icon')
  public hideIcon: boolean = false;

  @Output('item-clicked')
  public itemClicked: EventEmitter<ItemSelectedEvent<OverflowItem>> =
    new EventEmitter();

  hasUrl(item: OverflowItem): boolean {
    return !!(<TitledLinkItem>item).url;
  }

  onItemClicked(ev: Event, item: IOverflowNavigationItem): void {
    AngularHelper.emitEvent(this.itemClicked, ev, {
      selectedItem: item,
    });
  }
}

export interface IOverflowNavigationItem {
  title: string;
  url: string | null;
  isActive: boolean;
}
export class OverflowNavigationItem implements IOverflowNavigationItem {
  public title: string = '';
  public url: string | null = null;
  public isActive: boolean = false;

  constructor(values: Partial<OverflowNavigationItem>) {
    Object.assign(this, values);
  }
}
