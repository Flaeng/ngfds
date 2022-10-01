import { AfterViewInit, Component, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
//@ts-ignore
import DKFDS from 'dkfds';
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
  _dayOfMonth: string = '';
  get dayOfMonth(): string {
    return this._dayOfMonth;
  }
  set dayOfMonth(value: string) {
    this._dayOfMonth = value;
    this.onChange?.call(this, this.value);
    this.onTouched?.call(this);
  }

  _month: string = '';
  get month(): string {
    return this._month;
  }
  set month(value: string) {
    this._month = value;
    this.onChange?.call(this, this.value);
    this.onTouched?.call(this);
  }

  _year: string = '';
  get year(): string {
    return this._year;
  }
  set year(value: string) {
    this._year = value;
    this.onChange?.call(this, this.value);
    this.onTouched?.call(this);
  }

  set value(val: Date | null) {
    if (val != null) {
      this._dayOfMonth = val.getDate().toString() ?? '';
      this._month = (val.getMonth() + 1).toString() ?? '';
      this._year = val.getFullYear().toString() ?? '';
    } else this._dayOfMonth = this._month = this._year = '';
    this.onChange?.call(this, val);
    this.onTouched?.call(this);
  }

  get value(): Date | null {
    return DateHelper.parseDate(this._dayOfMonth, this._month, this._year);
  }
  
  onChange: ((date: Date | null) => {}) | null = null;
  onTouched: (() => {}) | null = null;
  onValidatorChange: (() => void) | null = null;

  @Input()
  public disabled: boolean = false;

  // https://blog.angular-university.io/angular-custom-form-controls/
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return null;
  }
  registerOnValidatorChange?(fn: () => void): void {
    this.onValidatorChange = fn;
  }
  ngAfterViewInit(): void {
    DKFDS.init();
  }
}
