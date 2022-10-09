import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { AngularHelper } from '../helpers/angular-helper';

@Component({
  selector: 'fds-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  providers: [...AngularHelper.formInput(ToggleSwitchComponent)],
})
export class ToggleSwitchComponent implements ControlValueAccessor, Validator {
  @Input()
  public disabled: boolean = false;

  private _value: boolean = false;
  public get value(): boolean {
    return this._value;
  }
  public set value(value: boolean) {
    this._value = value;
    this.onChange?.call(this, value);
    this.onTouched?.call(this);
  }

  static idGenerator = 1;

  id: string =
    'toggle-switch' + (ToggleSwitchComponent.idGenerator++).toString();

  // eslint-disable-next-line @typescript-eslint/ban-types
  onChange: ((value: boolean) => {}) | null = null;
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
