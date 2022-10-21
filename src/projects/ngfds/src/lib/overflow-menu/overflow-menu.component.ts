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

type OverflowTemplatedItem = OverflowItem & { template: TemplateRef<OverflowItem> };

@Component({
  selector: 'fds-overflow-menu',
  templateUrl: './overflow-menu.component.html',
})
export class OverflowMenuComponent implements AfterViewInit {
  @Input()
  public direction: 'left' | 'right' = 'right';

  @Input()
  public placeholder: string = '';

  _items: OverflowTemplatedItem[] = [];
  @Input()
  public get items(): OverflowItem[] {
    return this._items;
  }
  public set items(value: OverflowItem[]) {
    this._items = value.map<OverflowTemplatedItem>((x) => {
      return this.setTemplate(x);
    });
  }

  @Input('selected-item')
  public selectedItem: OverflowItem | null = null;

  @Input('hide-icon')
  public hideIcon: boolean = false;

  @ViewChild('itemWithLink')
  itemWithLink: TemplateRef<OverflowItem> | null = null;

  @ViewChild('itemWithoutLink')
  itemWithoutLink: TemplateRef<OverflowItem> | null = null;

  @Output('item-clicked')
  public itemClicked: EventEmitter<ItemSelectedEvent<OverflowItem>> =
    new EventEmitter();

  private setTemplate(x: OverflowItem) {
    const ext = (<TitledLinkItem>x).url
      ? { template: this.itemWithLink }
      : { template: this.itemWithoutLink };
    return Object.assign(x, ext) as OverflowTemplatedItem;
  }

  ngAfterViewInit(): void {
    this.items = this._items; // make sure to set template again after view init
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
}
export class OverflowNavigationItem implements IOverflowNavigationItem {
  public title: string = '';
  public url: string | null = null;

  constructor(values: Partial<OverflowNavigationItem>) {
    Object.assign(this, values);
  }
}
