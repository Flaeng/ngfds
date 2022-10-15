import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BasePageComponent } from '../BasePageComponent';

@Component({
  selector: 'app-date-picker-page',
  templateUrl: './date-picker-page.component.g.html',
})
export class DatePickerPageComponent extends BasePageComponent {
  date1: Date | null = null;
  date2presetToNextWeek: Date | null;
  date3isDisabled = true;
  date3: Date | null = new Date(2022, 4, 27);
  date4: Date | null = null;
  minDate: Date | null = new Date(new Date().getFullYear() - 1, 6, 15);
  maxDate: Date | null = new Date(new Date().getFullYear() + 1, 6, 15);

  constructor() {
    super();
    this.date2presetToNextWeek = new Date();
    this.date2presetToNextWeek.setDate(new Date().getDate() + 7);
  }

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
