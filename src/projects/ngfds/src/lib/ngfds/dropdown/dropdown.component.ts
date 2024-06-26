import {
  Component,
  ElementRef,
  forwardRef,
  HostListener,
  Input,
  Optional,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { FormFieldComponent } from '../../form-field/form-field.component';
import { ArrayHelper } from '../../helpers/array-helper';
import { NgModelComponent } from '../../ng-model-component';
import { NgfdsDropdownOptionComponent } from './dropdown-option/dropdown-option.component';

@Component({
  selector: 'ngfds-select',
  templateUrl: './dropdown.component.html',
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => NgfdsDropdownComponent) },
  ]
})
export class NgfdsDropdownComponent extends NgModelComponent<
NgfdsDropdownOptionComponent[] | NgfdsDropdownOptionComponent | null
> {
  /* Fields */
  @Input()
  public placeholder: string | null = null;

  @Input()
  public name: string = '';

  @Input()
  public disabled: boolean = false;

  @Input()
  public isOpen: boolean = false;

  @Input()
  public min: number = -1;

  @Input()
  public max: number = -1;

  @Input('allow-multiple')
  public allowMultiple: boolean = false;

  /* Properties */
  public get selectedItem(): NgfdsDropdownOptionComponent | null {
    if (this.allowMultiple)
      console.warn(
        'Select allows for multiple items to be selected. This property only returns the first selected item. Use: selectedItems for an array of selected items.'
      );
    return this.selectedItems.length === 0 ? null : this.selectedItems[0];
  }
  public set selectedItem(value: NgfdsDropdownOptionComponent | null) {
    this.selectedItems = value ? [value] : [];
  }

  private _selectedItems: NgfdsDropdownOptionComponent[] = [];
  public get selectedItems(): NgfdsDropdownOptionComponent[] {
    return this._selectedItems;
  }
  public set selectedItems(value: NgfdsDropdownOptionComponent[]) {
    this._selectedItems = value;
    this.emitNgModelChanged();
  }

  private options: NgfdsDropdownOptionComponent[] = [];

  /* Methods */
  constructor(
    @Optional() formField: FormFieldComponent,
    protected sanitizer: DomSanitizer
  ) {
    super(formField);
  }

  showContent(opt: NgfdsDropdownOptionComponent | null) {
    return opt ? this.sanitizer.bypassSecurityTrustHtml(opt.html) : '';
  }

  setValue(
    obj: NgfdsDropdownOptionComponent[] | NgfdsDropdownOptionComponent | null
  ): void {
    if (Array.isArray(obj)) {
      this.selectedItems = obj;
    } else {
      this.selectedItem = obj;
    }
  }

  emitNgModelChanged(): void {
    for (const opt of this.options) {
      opt.isSelected = this.selectedItems.indexOf(opt) !== -1;
    }
    super.emitChanges(this._selectedItems.map(x => x.value));
  }

  registerOption(comp: NgfdsDropdownOptionComponent) {
    this.options.push(comp);
  }

  unregisterOption(comp: NgfdsDropdownOptionComponent) {
    ArrayHelper.remove(this.options, comp);
  }

  public openDropdown(ev: Event | null) {
    if (ev) this.preventDefault(ev);
    this.isOpen = true;
    if (this.selectedItem === null) {
      if (this.options.length !== 0) this.options[0].setFocus();
    } else {
      this.selectedItem.setFocus();
    }
  }

  public toggleDropdown(ev: Event | null) {
    if (ev && ev.defaultPrevented) return;
    if (this.isOpen) this.closeDropdown(ev);
    else this.openDropdown(ev);
  }

  public closeDropdown(ev: Event | null) {
    if (ev) this.preventDefault(ev);
    this.isOpen = false;
  }

  private preventDefault(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
  }

  @ViewChild('formControl')
  formControl: ElementRef<HTMLDivElement> | null = null;

  @HostListener('document:click', ['$event', '$event.target'])
  globalClickHandler(ev: MouseEvent, target: HTMLElement): void {
    if (!target || !this.formControl) {
      return;
    }
    const clickedInside = this.formControl.nativeElement.contains(target);
    if (!clickedInside) {
      this.closeDropdown(ev);
    }
  }

  @HostListener('document:keydown', ['$event'])
  globalKeydownHandler(ev: KeyboardEvent): void {
    setTimeout(() => {
      if (
        !this.formControl ||
        this.isOpen === false ||
        ev.key.toLowerCase() !== 'tab'
      )
        return;
      const target = document.activeElement;
      const clickedInside = this.formControl.nativeElement.contains(target);
      if (!clickedInside) {
        this.closeDropdown(ev);
      }
    });
  }

  private handleArrowKey(ev: Event | null, key: 'up' | 'down'): void {
    if (this.isOpen) {
      this.handleArrowKeyWhenOpen(ev, key);
      return;
    }

    if (this.allowMultiple === true) return;

    if (key === 'up') {
      this.selectPreviousItem(ev);
    } else {
      this.selectNextItem(ev);
    }
  }

  private handleArrowKeyWhenOpen(ev: Event | null, key: 'up' | 'down') {
    if (key === 'up') {
      this.focusPreviousItem(ev);
    } else {
      this.focusNextItem(ev);
    }
  }

  public handleArrowUp(ev: Event | null): void {
    this.handleArrowKey(ev, 'up');
  }

  public handleArrowDown(ev: Event | null): void {
    this.handleArrowKey(ev, 'down');
  }

  public selectPreviousItem(ev: Event | null): void {
    ev?.preventDefault();
    const selectedIndex = this.selectedItem
      ? this.options.indexOf(this.selectedItem)
      : -1;
    if (selectedIndex === -1) return;
    const newSelectedIndex = Math.max(selectedIndex - 1, 0);
    this.selectedItem = this.options[newSelectedIndex];
  }

  public selectNextItem(ev: Event | null) {
    ev?.preventDefault();
    const selectedIndex = this.selectedItem
      ? this.options.indexOf(this.selectedItem)
      : -1;
    const newSelectedIndex = Math.min(
      selectedIndex + 1,
      this.options.length - 1
    );
    this.selectedItem = this.options[newSelectedIndex];
  }

  public focusPreviousItem(ev: Event | null) {
    if (ev) this.preventDefault(ev);
    const focusIndex = this.getItemIndexWithFocus();
    const prevIndex = focusIndex > 0 ? focusIndex - 1 : this.options.length - 1;
    this.options[prevIndex].setFocus();
  }

  private getItemIndexWithFocus() {
    const indexes = this.options.map((v, i) => (v.hasFocus() ? i : -1));
    const focusIndex = Math.max(...indexes);
    return focusIndex;
  }

  public focusNextItem(ev: Event | null) {
    if (ev) this.preventDefault(ev);
    let focusIndex = this.getItemIndexWithFocus();
    focusIndex = focusIndex === this.options.length - 1 ? -1 : focusIndex;
    this.options[focusIndex + 1].setFocus();
  }

  public toggleItemSelected(ev: Event | null, item: NgfdsDropdownOptionComponent) {
    const isSelected = this.allowMultiple
      ? this.selectedItems.indexOf(item) !== -1
      : this.selectedItem === item;

    if (isSelected) {
      this.unselectItem(ev, item);
    } else {
      this.selectItem(ev, item);
    }
  }

  public selectItem(ev: Event | null, item: NgfdsDropdownOptionComponent) {
    if (this.allowMultiple) {
      const index = this.selectedItems.indexOf(item);
      if (index === -1) this.selectedItems.push(item);
    } else {
      this.selectedItem = item;
      this.closeDropdown(ev);
    }
    this.emitNgModelChanged();
  }

  public unselectItem(ev: Event | null, item: NgfdsDropdownOptionComponent) {
    ev?.stopPropagation();
    if (this.allowMultiple) {
      const index = this.selectedItems.indexOf(item);
      if (index !== -1) this.selectedItems.splice(index, 1);
    } else {
      this.selectedItem = null;
    }
    this.emitNgModelChanged();
  }
}
