import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BasePageComponent } from '../BasePageComponent';

@Component({
  selector: 'app-date-input-page',
  templateUrl: './date-input-page.component.g.html',
})
export class DateInputPageComponent extends BasePageComponent {
  date1: Date | null = null;
  date2presetToToday: Date | null = new Date();
  date3isDisabled = true;
  date3: Date | null = new Date(2022, 9, 26);

  dateInputFormControl: FormControl = new FormControl(null, Validators.required);
  submitFormControl(): void {
    const rawValue = this.dateInputFormControl.value;
    alert('value: ' + JSON.stringify(rawValue));
  }

  dateInputFormGroup: FormGroup = new FormGroup({
    birthday: new FormControl(null, Validators.required)
  });
  submitFormGroup(): void {
    const rawValue = this.dateInputFormGroup.getRawValue();
    alert('value: ' + JSON.stringify(rawValue));
  }
}
