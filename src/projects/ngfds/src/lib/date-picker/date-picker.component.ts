import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Optional,
  ViewChild,
} from '@angular/core';
import * as DKFDS from 'dkfds';
import { FormFieldComponent } from '../form-field/public-api';
import { AngularHelper } from '../helpers/angular-helper';
import { DateHelper } from '../helpers/date-helper';
import { NgModelComponent } from '../ng-model-component';

@Component({
  selector: 'fds-date-picker',
  templateUrl: './date-picker.component.html',
  providers: [...AngularHelper.formInput(DatePickerComponent)],
})
export class DatePickerComponent
  extends NgModelComponent<Date | null>
  implements AfterViewInit
{
  @ViewChild('datePickerInput')
  datePickerInput: ElementRef | null = null;

  @ViewChild('datePickerWrapper')
  datePickerWrapper: ElementRef | null = null;

  stringValue = '';

  underlayingControl: DKFDS.DatePickerContext | null = null;

  @Input()
  public name: string = '';

  @Input('min')
  public min: Date | null = null;
  get minValue(): string {
    return this.formatDateWithDash(this.min);
  }

  @Input('max')
  public max: Date | null = null;
  get maxValue(): string {
    return this.formatDateWithDash(this.max);
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

  _initialValue: Date | null = null;
  _value: Date | null = null;
  set value(value: Date | null) {
    this._initialValue = this._value = value;
    this.stringValue = this.formatDateWithSlash(value);
    if (this.underlayingControl === null || this.datePickerInput === null)
      return;
    this.underlayingControl.internalInputEl.value =
      this.formatDateWithSlash(value);
    this.underlayingControl.externalInputEl.value =
      this.formatDateWithSlash(value);
    super.emitChanges(value);
  }
  get value(): Date | null {
    return  (this.underlayingControl === null)
      ? this._initialValue
      : this.underlayingControl.selectedDate;
  }

  constructor(private el: ElementRef, @Optional() formField: FormFieldComponent) {
    super(formField);
  }

  setValue(obj: Date | null): void {
    this.value = obj;
  }

  ngAfterViewInit(): void {
    if (this.el === null) return;
    DKFDS.datePicker.on(this.el.nativeElement);
    if (this.datePickerInput === null) return;
    this.disabled = this._initialDisabled;
    this.value = this._initialValue;
    this.underlayingControl = DKFDS.datePicker.getDatePickerContext(
      this.datePickerInput.nativeElement
    );
  }

  formatDateWithDash(value: Date | null): string {
    if (value === null) return '';
    return `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`;
  }

  formatDateWithSlash(value: Date | null): string {
    if (value === null) return '';
    const padLeft = (num: number) => {
      return `00${num}`.slice(-2);
    };
    return `${padLeft(value.getDate())}/${padLeft(
      value.getMonth() + 1
    )}/${value.getFullYear()}`;
  }

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
  }
}
