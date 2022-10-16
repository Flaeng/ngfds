import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  ItemSelectedEvent,
  NavigationItemHelper,
} from '../helpers/navigation-item-helper';

@Component({
  selector: 'fds-language-picker',
  templateUrl: './language-picker.component.html',
})
export class LanguagePickerComponent {
  @Input()
  public items: ILanguageOption[] = [];

  @Output()
  public change: EventEmitter<ItemSelectedEvent<ILanguageOption>> =
    new EventEmitter();

  helper: NavigationItemHelper<ILanguageOption>;

  constructor(router: Router) {
    this.helper = new NavigationItemHelper(router, this.change);
  }

  onClick(ev: Event, item: ILanguageOption): void {
    this.helper.handleClick(ev, item);
  }
}

export interface ILanguageOption {
  url: string | null;
  nativeLanguageName: string;
  currentLanguageName: string;
  iso639dash1code: string;
  isActive: boolean;
}
