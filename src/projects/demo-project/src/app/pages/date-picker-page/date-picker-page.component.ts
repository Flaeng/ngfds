import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BasePageComponent } from '../BasePageComponent';

@Component({
  selector: 'app-date-picker-page',
  templateUrl: './date-picker-page.component.g.html',
  styleUrls: ['./date-picker-page.component.scss'],
})
export class DatePickerPageComponent extends BasePageComponent {
  date1: Date | null = null;
  date2presetToToday: Date | null = new Date();
  date3isDisabled = true;
  date3: Date | null = new Date(2022, 9, 27);
  
  dateInputFormControl: FormControl = new FormControl<Date | null>(null, Validators.required);
  submitFormControl(): void {
    const rawValue = this.dateInputFormControl.getRawValue();
    alert('form data: ' + JSON.stringify(rawValue));
  }

  dateInputFormGroup: FormGroup = new FormGroup({
    birthday: new FormControl<Date | null>(null, Validators.required)
  });
  submitFormGroup(): void {
    const rawValue = this.dateInputFormGroup.getRawValue();
    alert('form data: ' + JSON.stringify(rawValue));
  }
}
