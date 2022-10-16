import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ItemSelectedEvent, NavigationItemHelper } from '../../helpers/navigation-item-helper';

@Component({
  selector: 'fds-context-menu',
  templateUrl: './context-menu.component.html',
})
export class ContextMenuComponent {
  @Input()
  public buttons: IContextMenuButton[] | null = null;

  @Input()
  public listItemTemplate: TemplateRef<unknown> | null = null;

  @Output('button-click')
  public buttonClicked: EventEmitter<ItemSelectedEvent<IContextMenuButton>> = new EventEmitter();

  helper: NavigationItemHelper<IContextMenuButton>;

  constructor(router: Router) {
    this.helper = new NavigationItemHelper(router, this.buttonClicked);
  }

  onButtonClicked(ev: Event, item: IContextMenuButton): void {
    this.helper.handleClick(ev, item);
  }
}

export interface IContextMenuButton {
  text: string;
  url: string | null;
}
