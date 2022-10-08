import { AfterViewInit, Component, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import * as DKFDS from 'dkfds';
import { DateHelper } from '../helpers/date-helper';

@Component({
  selector: 'fds-date-input',
  templateUrl: './date-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: DateInputComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: DateInputComponent,
    },
  ],
})
export class DateInputComponent
  implements AfterViewInit, ControlValueAccessor, Validator
{
  _dayOfMonth: number | null = null;
  get dayOfMonth(): number | null {
    return this._dayOfMonth;
  }
  set dayOfMonth(value: number | null) {
    this._dayOfMonth = value;
    this.onChange?.call(this, this.value);
    this.onTouched?.call(this);
  }

  _month: number | null = null;
  get month(): number | null {
    return this._month;
  }
  set month(value: number | null) {
    this._month = value;
    this.onChange?.call(this, this.value);
    this.onTouched?.call(this);
  }

  _year: number | null = null;
  get year(): number | null {
    return this._year;
  }
  set year(value: number | null) {
    this._year = value;
    this.onChange?.call(this, this.value);
    this.onTouched?.call(this);
  }

  set value(val: Date | null) {
    if (val != null) {
      this._dayOfMonth = val.getDate();
      this._month = val.getMonth() + 1;
      this._year = val.getFullYear();
    } else this._dayOfMonth = this._month = this._year = null;
    this.onChange?.call(this, val);
    this.onTouched?.call(this);
  }

  get value(): Date | null {
    return this._dayOfMonth == null || this._month == null || this._year == null
      ? null
      : DateHelper.parseDate(this._dayOfMonth, this._month, this._year);
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  onChange: ((date: Date | null) => {}) | null = null;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onTouched: (() => {}) | null = null;
  onValidatorChange: (() => void) | null = null;

  @Input()
  public disabled = false;

  // https://blog.angular-university.io/angular-custom-form-controls/
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  writeValue(obj: any): void {
    this.value = obj;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  // #IF angular >= 14
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    // #ELSE
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */
    // validate(control: AbstractControl): ValidationErrors | null {
    // #ENDIF
    return null;
  }
  registerOnValidatorChange?(fn: () => void): void {
    this.onValidatorChange = fn;
  }
  ngAfterViewInit(): void {
    DKFDS.init();
  }
}
