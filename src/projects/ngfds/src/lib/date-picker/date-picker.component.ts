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
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import * as DKFDS from 'dkfds';
import { DateHelper } from '../helpers/date-helper';

@Component({
  selector: 'fds-date-picker',
  templateUrl: './date-picker.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: DatePickerComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: DatePickerComponent,
    },
  ],
})
export class DatePickerComponent
  implements AfterViewInit, ControlValueAccessor, Validator
{
  stringValue = '';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // context: any;

  @ViewChild('datePickerInput')
  datePickerInput: ElementRef | null = null;

  @ViewChild('datePickerWrapper')
  datePickerWrapper: ElementRef | null = null;

  _value: Date | null = null;
  set value(value: Date | null) {
    this._value = value;
    const ctrls = this.getDatePickerElements();
    if (ctrls == null) return;
    ctrls.input.value = DateHelper.toString(value);
  }
  get value(): Date | null {
    return this._value;
  }

  onChange: ((date: Date | null) => void) | null = null;
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
    this.onChange?.call(this, this.value);
    this.onTouched?.call(this);
  }

  getDatePickerElements(): {
    input: HTMLInputElement;
    button: HTMLButtonElement;
  } | null {
    if (this.datePickerWrapper == null) return null;
    const wrapper: HTMLDivElement = this.datePickerWrapper.nativeElement;
    const input = wrapper.querySelector<HTMLInputElement>(
      '.date-picker__external-input'
    );
    const button = wrapper.querySelector<HTMLButtonElement>(
      '.date-picker__button'
    );
    return input != null && button != null ? { input, button } : null;
  }

  _initialDisabled = false;
  @Input()
  public get disabled(): boolean {
    const ctrls = this.getDatePickerElements();
    return (
      ctrls != null &&
      ctrls.input.hasAttribute('disabled') &&
      ctrls.button.hasAttribute('disabled')
    );
  }
  public set disabled(value: boolean) {
    this._initialDisabled = value;
    const ctrls = this.getDatePickerElements();
    if (ctrls == null) return;

    if (value) {
      ctrls.input.setAttribute('disabled', '');
      ctrls.button.setAttribute('disabled', '');
    } else {
      ctrls.input.removeAttribute('disabled');
      ctrls.button.removeAttribute('disabled');
    }
  }

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
  // #IF angular <= 13
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */
  // validate(control: AbstractControl): ValidationErrors | null {
  // #ELSE
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    // #ENDIF
    return null;
  }
  registerOnValidatorChange?(fn: () => void): void {
    this.onValidatorChange = fn;
  }
  ngAfterViewInit(): void {
    DKFDS.datePicker.init(this.datePickerWrapper?.nativeElement);
    this.value = this._value;
    this.disabled = this._initialDisabled;
    if (this.datePickerInput == null) return;
    // this.context = DKFDS.datePicker.getDatePickerContext(
    //   this.datePickerInput.nativeElement
    // );
  }
}
