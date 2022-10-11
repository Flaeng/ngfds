import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
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
  selector: 'fds-date-picker',
  templateUrl: './date-picker.component.html',
  providers: [...AngularHelper.formInput(DatePickerComponent)],
})
export class DatePickerComponent
  implements AfterViewInit, ControlValueAccessor, Validator
{
  stringValue = '';

  @ViewChild('datePickerInput')
  datePickerInput: ElementRef | null = null;

  @ViewChild('datePickerWrapper')
  datePickerWrapper: ElementRef | null = null;

  underlayingControl: DKFDS.DatePickerContext | null = null;

  _min: Date | null = null;
  @Input('min')
  public get min(): Date | null {
    return this._min;
  }
  public set min(value: Date | null) {
    this._min = value;
  }
  get minValue(): string {
    return this.dateToString(this.min);
  }
  
  _max: Date | null = null;
  @Input('max')
  public get max(): Date | null {
    return this._max;
  }
  public set max(value: Date | null) {
    this._max = value;
  }
  get maxValue(): string {
    return this.dateToString(this.max);
  }

  dateToString(value: Date | null): string {
    if (value === null) return '';
    return `${value.getFullYear()}-${( value.getMonth() + 1 )}-${value.getDate()}`;
  }

  _initialValue: Date | null = null;
  _value: Date | null = null;
  set value(value: Date | null) {
    this._initialValue = this._value = value;
    if (this.underlayingControl === null || this.datePickerInput === null) return;
    this.underlayingControl.internalInputEl.value = this.formatDate(value);
    this.underlayingControl.externalInputEl.value = this.formatDate(value);
    this.onChange?.call(this, value);
    this.onTouched?.call(this);
  }
  get value(): Date | null {
    if (this.underlayingControl === null)
      throw new Error(
        'Cannot access value before component has been initialized'
      );
    return this.underlayingControl.selectedDate;
  }

  formatDate(value: Date | null): string {
    if (value === null) return '';
    const padLeft = (num: number) => {
      return `00${num}`.slice(-2);
    }
    return `${padLeft(value.getDate())}/${padLeft(value.getMonth() + 1)}/${value.getFullYear()}`;
  }

  onChange: ((value: Date | null) => void) | null = null;
  onTouched: (() => void) | null = null;
  onValidatorChange: (() => void) | null = null;

  onInputChange(ev: Event): void {
    const value = (ev.target as HTMLInputElement).value;
    let date: Date | null;
    try {
      const split = value.split('-');
      date = DateHelper.parseDateString(split[2], split[1], split[0]);
    } catch {
      date = null;
    }

    this.value = date;
    this.onChange?.call(this, date);
    this.onTouched?.call(this);
  }

  _initialDisabled = false;
  @Input()
  public get disabled(): boolean {
    return (
      this.underlayingControl !== null &&
      this.underlayingControl.externalInputEl.hasAttribute('disabled') &&
      this.underlayingControl.toggleBtnEl.hasAttribute('disabled')
    );
  }
  public set disabled(value: boolean) {
    this._initialDisabled = value;
    if (this.datePickerInput === null) return;
    if (value) {
      DKFDS.datePicker.disable(this.datePickerInput.nativeElement);
    } else {
      DKFDS.datePicker.enable(this.datePickerInput.nativeElement);
    }
  }

  constructor(private el: ElementRef) {}

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
    if (this.el === null) return;
    DKFDS.datePicker.on(this.el.nativeElement);
    if (this.datePickerInput === null) return;
    this.underlayingControl = DKFDS.datePicker.getDatePickerContext(
      this.datePickerInput.nativeElement
    );
    this.disabled = this._initialDisabled;
    this.value = this._initialValue;
  }
}
