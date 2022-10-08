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
import { AngularHelper } from '../helpers/angular-helper';
import { DateHelper } from '../helpers/date-helper';

@Component({
  selector: 'fds-date-input',
  templateUrl: './date-input.component.html',
  providers: [
    AngularHelper.ngValue(DateInputComponent),
    AngularHelper.ngValidators(DateInputComponent),
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
    this.emitChange(this.value);
  }

  _month: number | null = null;
  get month(): number | null {
    return this._month;
  }
  set month(value: number | null) {
    this._month = value;
    this.emitChange(this.value);
  }

  _year: number | null = null;
  get year(): number | null {
    return this._year;
  }
  set year(value: number | null) {
    this._year = value;
    this.emitChange(this.value);
  }

  set value(val: Date | null) {
    if (val != null) {
      this._dayOfMonth = val.getDate();
      this._month = val.getMonth() + 1;
      this._year = val.getFullYear();
    } else this._dayOfMonth = this._month = this._year = null;
    this.emitChange(val);
  }

  get value(): Date | null {
    return this._dayOfMonth == null || this._month == null || this._year == null
      ? null
      : DateHelper.parseDate(this._dayOfMonth, this._month, this._year);
  }

  emitChange(val: Date | null) {
    this.onChange?.call(this, val);
    this.onTouched?.call(this);
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  onChange: ((date: Date | null) => {}) | null = null;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onTouched: (() => {}) | null = null;
  onValidatorChange: (() => void) | null = null;

  @Input()
  public disabled: boolean = false;

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
