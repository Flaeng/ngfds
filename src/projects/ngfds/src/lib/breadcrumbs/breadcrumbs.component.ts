import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ItemSelectedEvent, NavigationItemHelper } from '../helpers/navigation-item-helper';

@Component({
  selector: 'fds-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {

  @Input()
  public items: IBreadcrumbItem[] = [];

  @Input('active-item-template')
  public activeItemTemplate: TemplateRef<unknown> | null = null;

  @Input('item-template')
  public itemTemplate: TemplateRef<unknown> | null = null;

  @Output('item-clicked')
  public itemClicked: EventEmitter<ItemSelectedEvent<IBreadcrumbItem>> = new EventEmitter();

  helper: NavigationItemHelper<IBreadcrumbItem>;

  constructor(
    router: Router
  ) {
    this.helper = new NavigationItemHelper<IBreadcrumbItem>(router, this.itemClicked);
   }

  getAriaCurrent(item: IBreadcrumbItem): string | null {
    return item.isActive === true ? 'page' : null;
  }

}
export interface IBreadcrumbItem {
  header: string;
  url: string | null;
  isActive: boolean;
}
export class BreadcrumbItem implements IBreadcrumbItem {
  public header: string = '';
  public url: string | null = null;
  public isActive: boolean = false;
}
