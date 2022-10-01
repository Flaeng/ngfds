import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-input-page',
  templateUrl: './date-input-page.component.g.html',
  styleUrls: ['./date-input-page.component.scss'],
})
export class DateInputPageComponent {
  date1: Date | null = null;
  date2presetToToday: Date | null = new Date();
  date3isDisabled: boolean = true;
  date3: Date | null = new Date(2022, 9, 26);

  dateInputFormControl: FormControl = new FormControl<Date | null>(null, Validators.required);
  submitFormControl(): void {
    const rawValue = this.dateInputFormControl.getRawValue();
    window.alert('form data: ' + JSON.stringify(rawValue));
  }

  dateInputFormGroup: FormGroup = new FormGroup({
    birthday: new FormControl<Date | null>(null, Validators.required)
  });
  submitFormGroup(): void {
    const rawValue = this.dateInputFormGroup.getRawValue();
    window.alert('form data: ' + JSON.stringify(rawValue));
  }
}
