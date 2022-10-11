import { AfterViewInit, Component, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import * as DKFDS from 'dkfds';
import { AngularHelper } from '../helpers/angular-helper';
import { DateHelper } from '../helpers/date-helper';

@Component({
  selector: 'fds-date-input',
  templateUrl: './date-input.component.html',
  providers: [...AngularHelper.formInput(DateInputComponent)],
})
export class DateInputComponent
  implements AfterViewInit, ControlValueAccessor, Validator
{
  _dayOfMonth: string = '';
  get dayOfMonth(): string {
    return this._dayOfMonth;
  }
  set dayOfMonth(value: string) {
    this._dayOfMonth = value;
    this.emitChange(this.value);
  }

  _month: string = '';
  get month(): string {
    return this._month;
  }
  set month(value: string) {
    this._month = value;
    this.emitChange(this.value);
  }

  _year: string = '';
  get year(): string {
    return this._year;
  }
  set year(value: string) {
    this._year = value;
    this.emitChange(this.value);
  }

  set value(val: Date | null) {
    if (val != null) {
      this._dayOfMonth = val.getDate().toString();
      this._month = (val.getMonth() + 1).toString();
      this._year = val.getFullYear().toString();
    } else this._dayOfMonth = this._month = this._year = '';
    this.emitChange(val);
  }

  get value(): Date | null {
    return this._dayOfMonth.length === 0 ||
      this._month.length === 0 ||
      this._year.length === 0
      ? null
      : DateHelper.parseDate(
          parseInt(this._dayOfMonth, 10),
          parseInt(this._month, 10),
          parseInt(this._year, 10)
        );
  }

  emitChange(val: Date | null) {
    this.onChange?.call(this, val);
    this.onTouched?.call(this);
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  onChange: ((value: Date | null) => {}) | null = null;
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
