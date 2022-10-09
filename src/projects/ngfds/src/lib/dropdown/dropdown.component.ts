import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { AngularHelper } from '../helpers/angular-helper';
import { DropdownOptionComponent } from './public-api';

type FdsDropdownItem = {
  value: unknown | null;
  text: string;
};
@Component({
  selector: 'fds-select',
  templateUrl: './dropdown.component.html',
  providers: [...AngularHelper.formInput(DropdownComponent)],
})
export class DropdownComponent implements ControlValueAccessor, Validator {
  /* Fields */
  @Input()
  public placeholder: string | null = null;

  @Input()
  public disabled: boolean = false;

  /* Properties */
  private _selectedItems: unknown | null = null;
  public get selectedItem(): unknown | null {
    return this._selectedItems;
  }
  public set selectedItem(value: unknown | null) {
    console.log('value', value);
    this._selectedItems = value;
    this.onChange?.call(this, value);
    this.onTouched?.call(this);
  }

  optionComponents: DropdownOptionComponent[] = [];

  @ViewChild('selectControl')
  selectControl: ElementRef<HTMLSelectElement> | null = null;

  optionList: FdsDropdownItem[] = [];

  onChange: ((value: unknown | null) => void) | null = null;
  onTouched: (() => void) | null = null;
  onValidatorChange: (() => void) | null = null;

  /* Methods */
  registerOption(component: DropdownOptionComponent) {
    this.optionComponents.push(component);
    this.optionList.push({ value: component.value, text: component.text });
  }

  createNode(comp: DropdownOptionComponent): HTMLOptionElement {
    const elem = document.createElement('option');
    elem.innerText = comp.el.nativeElement.innerText?.toString(); // ?? comp.value.toString();
    return elem;
  }

  unregisterOption(comp: DropdownOptionComponent) {
    const index = this.optionComponents.indexOf(comp);
    if (index !== -1) this.optionComponents.splice(index, 1);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  writeValue(obj: any): void {
    this.selectedItem = obj ?? null;
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
