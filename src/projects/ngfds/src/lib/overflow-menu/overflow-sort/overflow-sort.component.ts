import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ItemSelectedEvent } from '../../helpers/navigation-item-helper';
import { IOverflowNavigationItem } from '../overflow-menu.component';

@Component({
  selector: 'fds-overflow-sort',
  templateUrl: './overflow-sort.component.html',
})
export class OverflowSortComponent {
  @Input()
  public items: IOverflowSortItem[] = [];

  @Input()
  public direction: 'left' | 'right' = 'right';

  private _selectedItem: IOverflowNavigationItem | null = null;
  @Input()
  public get selectedItem(): IOverflowSortItem | null {
    if (this._selectedItem === null) {
      return null;
    }
    return Object.keys(this._selectedItem).find((x) => x === 'ref')
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (this._selectedItem as any).ref
      : null;
  }
  public set selectedItem(value: IOverflowSortItem | null) {
    if (value === null) {
      this._selectedItem = null;
      return;
    }
    const item = {
      title: value.title,
      url: null,
      ref: value,
    };
    this._selectedItem = item;
  }

  @Output('item-clicked')
  public itemClicked: EventEmitter<ItemSelectedEvent<IOverflowSortItem>> =
    new EventEmitter();
}

export interface IOverflowSortItem {
  title: string;
}
