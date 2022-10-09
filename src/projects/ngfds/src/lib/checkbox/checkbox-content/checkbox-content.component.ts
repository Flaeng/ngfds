import { AfterViewInit, Component, Input } from '@angular/core';
import * as DKFDS from 'dkfds';
import { DkfdsHelper } from '../../helpers/dkfds-helper';
import { CheckboxSize } from '../checkbox.component';

@Component({
  selector: 'fds-checkbox-content',
  templateUrl: './checkbox-content.component.html',
})
export class CheckboxContentComponent implements AfterViewInit {
  @Input()
  public size: CheckboxSize = 'large';

  @Input()
  public group: string | null = null;

  underlayingControl: DKFDS.CheckboxToggleContent | null = null;

  ngAfterViewInit(): void {
    if (this.group === null) {
      return;
    }
    const checkbox = document.querySelector<HTMLElement>(
      `[data-aria-controls='${this.group}']`
    );
    if (checkbox === null) {
      console.warn(`Failed to find checkbox with group name: ${this.group}`);
      return;
    }
    this.underlayingControl = DkfdsHelper.createAndInit(
      DKFDS.CheckboxToggleContent,
      checkbox
    );
  }
}
