import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { AngularHelper } from '../helpers/angular-helper';

export type CheckboxSize = 'large' | 'small';
@Component({
  selector: 'fds-checkbox',
  templateUrl: './checkbox.component.html',
  providers: [...AngularHelper.formInput(CheckboxComponent)],
})
export class CheckboxComponent implements ControlValueAccessor, Validator {
  _value: boolean = false;
  public get value(): boolean {
    return this._value;
  }
  public set value(value: boolean) {
    this._value = value;
    this.emitChange(value);
  }

  @Input()
  public disabled: boolean = false;

  @Input()
  public size: CheckboxSize = 'large';

  @Input()
  public group: string | null = null;

  static idGenerator = 1;

  id: string = 'checkbox' + (CheckboxComponent.idGenerator++).toString();

  emitChange(val: boolean) {
    this.onChange?.call(this, val);
    this.onTouched?.call(this);
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  onChange: ((date: boolean) => {}) | null = null;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onTouched: (() => {}) | null = null;
  onValidatorChange: (() => void) | null = null;

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
}
