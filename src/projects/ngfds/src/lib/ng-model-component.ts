import { ElementRef } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import * as DKFDS from 'dkfds';
import { FormFieldComponent } from './form-field/form-field.component';
import { DkfdsHelper } from './helpers/dkfds-helper';

export type CharacterLimitComponent = {
  showCharacterLimit: boolean;
  formControlWrapper: ElementRef<HTMLDivElement> | undefined;
  underlayingControl: DKFDS.CharacterLimit | null;
};

export abstract class NgModelComponent<T>
  implements ControlValueAccessor, Validator
{
  onChange: ((value: T) => void) | null = null;
  onTouched: (() => void) | null = null;
  onValidatorChange: (() => void) | null = null;

  abstract disabled: boolean;

  abstract setValue(obj: T): void;

  abstract name: string;

  constructor(protected formField: FormFieldComponent | null) {}

  onInit() {
    this.name = this.formField ? `input_${this.formField.fieldName}` : '';
  }

  protected emitChanges(value: T): void {
    this.onChange?.call(this, value);
    this.onTouched?.call(this);
  }

  handleChangesForCharacterLimit(comp: CharacterLimitComponent): void {
    if (comp.showCharacterLimit === true) {
      this.trySetupCharacterLimit(comp);
    } else if (comp.underlayingControl !== null) {
      comp.underlayingControl = null;
    }
  }

  trySetupCharacterLimit(comp: CharacterLimitComponent): void {
    if (!comp.showCharacterLimit) return;
    if (!comp.formControlWrapper) return;
    if (comp.underlayingControl) return;
    comp.underlayingControl = DkfdsHelper.createAndInit(
      DKFDS.CharacterLimit,
      comp.formControlWrapper
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  writeValue(obj: any): void {
    this.setValue(obj as T);
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
