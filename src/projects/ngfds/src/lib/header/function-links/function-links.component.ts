import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { AngularHelper } from '../../helpers/angular-helper';
import { ItemSelectedEvent } from '../../helpers/navigation-item-helper';

@Component({
  selector: 'fds-function-links',
  templateUrl: './function-links.component.html',
})
export class FunctionLinksComponent implements AfterViewInit {
  _items: FunctionTemplatedLink[] = [];
  @Input()
  public get items(): FunctionLink[] {
    return this._items;
  }
  public set items(value: FunctionLink[]) {
    this._items = value.map<FunctionTemplatedLink>((x) => {
      return this.setTemplate(x);
    });
  }

  @ViewChild('itemWithText')
  itemWithText: TemplateRef<FunctionLink> | null = null;

  @ViewChild('itemWithIconAndText')
  itemWithIconAndText: TemplateRef<FunctionLink> | null = null;

  @Output('item-click')
  public itemClick: EventEmitter<ItemSelectedEvent<FunctionLink>> =
    new EventEmitter();

  setTemplate(x: FunctionLink): FunctionTemplatedLink {
    const hasIcon: boolean = !!(<IconFunctionLink>x).icon;
    const template = hasIcon ? this.itemWithIconAndText : this.itemWithText;
    return Object.assign(x, { template }) as FunctionTemplatedLink;
  }

  ngAfterViewInit(): void {
    this.items = this._items; // make sure to set template again after view init
  }

  onItemClick(ev: Event, item: FunctionLink): void {
    ev.preventDefault();
    AngularHelper.emitEvent(this.itemClick, ev, { selectedItem: item });
  }
}
type FunctionTemplatedLink = FunctionLink & {
  template: TemplateRef<FunctionLink>;
};

type FunctionLink = IconFunctionLink | TextFunctionLink;
type IconFunctionLink = TextFunctionLink & { icon: string };
type TextFunctionLink = { text: string };
