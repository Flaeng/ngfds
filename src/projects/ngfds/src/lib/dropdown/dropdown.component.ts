import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  Optional,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormFieldComponent } from '../form-field/form-field.component';
import { ArrayHelper } from '../helpers/array-helper';
import { InputSize } from '../models/input-sizes';
import { NgModelComponent } from '../ng-model-component';
import { DropdownOptionComponent } from './dropdown-option/dropdown-option.component';

type FdsDropdownItem = {
  value: unknown | null;
  text: string;
};
@Component({
  selector: 'fds-select',
  templateUrl: './dropdown.component.html',
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => DropdownComponent) },
  ]
})
export class DropdownComponent extends NgModelComponent<unknown | null> {
  /* Fields */
  @Input()
  public placeholder: string | null = null;

  @Input()
  public disabled: boolean = false;

  @Input()
  public size: InputSize | null = null;

  @Input()
  public name: string = '';

  /* Properties */
  private _selectedItems: unknown | null = null;
  public get selectedItem(): unknown | null {
    return this._selectedItems;
  }
  public set selectedItem(value: unknown | null) {
    this._selectedItems = value;
    super.emitChanges(value);
  }

  optionComponents: DropdownOptionComponent[] = [];

  @ViewChild('selectControl')
  selectControl: ElementRef<HTMLSelectElement> | null = null;

  optionList: FdsDropdownItem[] = [];

  /* Methods */

  constructor(@Optional() formField: FormFieldComponent) {
    super(formField);
  }

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
    ArrayHelper.remove(this.optionComponents, comp);
  }

  setValue(obj: unknown | null): void {
    this.selectedItem = obj ?? null;
  }
}
