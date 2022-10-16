import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ItemSelectedEvent, NavigationItemHelper } from '../../helpers/navigation-item-helper';

@Component({
  selector: 'fds-function-links',
  templateUrl: './function-links.component.html',
})
export class FunctionLinksComponent {
  @Input()
  public items: IFunctionLink[] | null = null;

  @Output('item-click')
  public itemClick: EventEmitter<ItemSelectedEvent<IFunctionLink>> = new EventEmitter();

  helper: NavigationItemHelper<IFunctionLink>;

  constructor(
    router: Router
  ) {
    this.helper = new NavigationItemHelper(router, this.itemClick);
  }

  onItemClick(ev: Event, item: IFunctionLink): void {
    this.helper.handleClick(ev, item);
  }
}

export interface IFunctionLink {
  icon: string | null;
  text: string | null;
  url: string | null;
}
