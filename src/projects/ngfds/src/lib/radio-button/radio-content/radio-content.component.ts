import { AfterViewInit, Component, Input } from '@angular/core';
import * as DKFDS from 'dkfds';
import { DkfdsHelper } from '../../helpers/dkfds-helper';
import { RadioButtonSize, RadioGroupComponent } from '../public-api';

@Component({
  selector: 'fds-radio-content',
  templateUrl: './radio-content.component.html',
})
export class RadioContentComponent implements AfterViewInit {
  @Input()
  public size: RadioButtonSize = 'large';

  @Input()
  public name: string | null = null;

  underlayingControl: DKFDS.RadioToggleGroup | null = null;

  constructor(private radioGroup: RadioGroupComponent) {}

  ngAfterViewInit(): void {
    if (this.name === null) {
      return;
    }
    this.underlayingControl = DkfdsHelper.createAndInit(
      DKFDS.RadioToggleGroup,
      this.radioGroup.el.nativeElement
    );
  }
}
