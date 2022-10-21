import { Component, ElementRef, Input } from '@angular/core';
import { DkfdsHelper } from '../../helpers/dkfds-helper';
import * as DKFDS from 'dkfds';

@Component({
  selector: 'fds-overflow-wrapper',
  templateUrl: './overflow-wrapper.component.html',
})
export class OverflowWrapperComponent {
  @Input()
  public direction: 'left' | 'right' = 'right';

  static idGenerator: number = 1;
  public readonly id: string =
    'OverflowWrapperComponent' +
    (OverflowWrapperComponent.idGenerator++).toString();

  dropdownTrigger: ElementRef<HTMLButtonElement> | null = null;
  overflowMenu: ElementRef<HTMLDivElement> | null = null;

  underlayingControl: DKFDS.Dropdown | null = null;

  registerButton(dropdownTrigger: ElementRef<HTMLButtonElement>) {
    if (this.dropdownTrigger)
      throw new Error(
        'OverflowWrapperComponent can only have 1 OverflowButtonComponent. 2 or more was provided.'
      );
    this.dropdownTrigger = dropdownTrigger;
    this.trySetupUnderlayingControl();
  }

  unregisterButton() {
    this.dropdownTrigger = null;
    this.underlayingControl = null;
  }

  registerOverflowMenu(overflowMenu: ElementRef<HTMLDivElement>) {
    this.overflowMenu = overflowMenu;
    this.trySetupUnderlayingControl();
  }

  unregisterOverflowMenu() {
    this.overflowMenu = null;
    this.underlayingControl = null;
  }

  trySetupUnderlayingControl() {
    if (!this.dropdownTrigger) return;
    if (!this.overflowMenu) return;
    if (this.underlayingControl) return;
    this.underlayingControl = DkfdsHelper.createAndInit(
      DKFDS.Dropdown,
      this.dropdownTrigger.nativeElement
    );
  }
}
