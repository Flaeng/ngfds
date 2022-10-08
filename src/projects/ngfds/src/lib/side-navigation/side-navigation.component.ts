import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  ItemSelectedEvent,
  NavigationItemHelper,
} from '../helpers/navigation-item-helper';

@Component({
  selector: 'fds-side-navigation',
  templateUrl: './side-navigation.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class SideNavigationComponent implements OnInit, OnDestroy {
  @Input()
  public items: ISideNavigationItem[] = [];

  @Input('item-template')
  public itemTemplate: TemplateRef<unknown> | null = null;

  @Input('always-show-children')
  public alwaysShowChildren: boolean = false;

  @Output('item-clicked')
  public itemClicked: EventEmitter<ItemSelectedEvent<ISideNavigationItem>> =
    new EventEmitter();

  subOnRoutingEvent: Subscription | null = null;
  helper: NavigationItemHelper<ISideNavigationItem>;

  constructor(private router: Router) {
    this.helper = new NavigationItemHelper<ISideNavigationItem>(
      router,
      this.itemClicked
    );
  }

  ngOnInit(): void {
    this.subOnRoutingEvent = this.router.events.subscribe((ev) =>
      this.onRoutingEvent(ev)
    );
  }

  ngOnDestroy(): void {
    this.subOnRoutingEvent?.unsubscribe();
  }

  getAriaCurrent(item: ISideNavigationItem): true | false | 'page' {
    if (item.isActive === false) return false;

    if (!item.children) return 'page';

    return item.children.some((x) => x.isActive) ? true : 'page';
  }

  setIsActive(items: ISideNavigationItem[], url: string): void {
    const comparer =
      url.length === 0
        ? (item: ISideNavigationItem) => item.url.length === 0
        : (item: ISideNavigationItem) =>
            url.startsWith(this.prepareUrl(item.url));

    for (const item of items) {
      item.isActive = comparer(item);
      if (item.children) this.setIsActive(item.children, url);
    }
  }

  prepareUrl(url: string): string {
    url = url.toLowerCase();
    url = url.startsWith('/') ? url.substring(1) : url;
    return url;
  }

  onRoutingEvent(ev: Event): void {
    if (ev instanceof NavigationEnd) {
      const url = this.prepareUrl(ev.url);
      this.setIsActive(this.items, url);
    }
  }
}
export interface ISideNavigationItem {
  title: string;
  subtitle: string | null;
  url: string;
  isActive: boolean;
  children: ISideNavigationItem[] | null;
}
export class SideNavigationItem implements ISideNavigationItem {
  public title: string = '';
  public subtitle: string | null = null;
  public url: string = '';
  public isActive: boolean = false;
  public children: SideNavigationItem[] | null = null;

  constructor(values: Partial<SideNavigationItem>) {
    Object.assign(this, values);
  }
}
