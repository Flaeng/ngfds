import {
  Component,
  ElementRef,
  Input,
  Optional,
  ViewChild,
} from '@angular/core';
import { FormFieldComponent } from '../form-field/public-api';
import { AngularHelper } from '../helpers/angular-helper';
import { NgModelComponent } from '../ng-model-component';
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
export class DropdownComponent extends NgModelComponent<unknown | null> {
  /* Fields */
  @Input()
  public placeholder: string | null = null;

  @Input()
  public disabled: boolean = false;

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
    const index = this.optionComponents.indexOf(comp);
    if (index !== -1) this.optionComponents.splice(index, 1);
  }

  setValue(obj: unknown | null): void {
    this.selectedItem = obj ?? null;
  }
}
