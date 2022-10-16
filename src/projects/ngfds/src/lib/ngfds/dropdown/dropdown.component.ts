import {
  Component,
  ElementRef,
  HostListener,
  Input,
  Optional,
  ViewChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormFieldComponent } from '../../form-field/public-api';
import { AngularHelper } from '../../helpers/angular-helper';
import { ArrayHelper } from '../../helpers/array-helper';
import { NgModelComponent } from '../../ng-model-component';
import { DropdownOptionComponent } from './public-api';

@Component({
  selector: 'ngfds-select',
  templateUrl: './dropdown.component.html',
  providers: [...AngularHelper.formInput(DropdownComponent)],
})
export class DropdownComponent extends NgModelComponent<
  DropdownOptionComponent[] | DropdownOptionComponent | null
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
  public get selectedItem(): DropdownOptionComponent | null {
    if (this.allowMultiple)
      console.warn(
        'Select allows for multiple items to be selected. This property only returns the first selected item. Use: selectedItems for an array of selected items.'
      );
    return this.selectedItems.length === 0 ? null : this.selectedItems[0];
  }
  public set selectedItem(value: DropdownOptionComponent | null) {
    this.selectedItems = value ? [value] : [];
  }

  private _selectedItems: DropdownOptionComponent[] = [];
  public get selectedItems(): DropdownOptionComponent[] {
    return this._selectedItems;
  }
  public set selectedItems(value: DropdownOptionComponent[]) {
    this._selectedItems = value;
    this.emitNgModelChanged();
  }

  private options: DropdownOptionComponent[] = [];

  /* Methods */
  constructor(@Optional() formField: FormFieldComponent, protected sanitizer: DomSanitizer) {
    super(formField);
  }

  showContent(opt: DropdownOptionComponent | null) {
    return opt ? this.sanitizer.bypassSecurityTrustHtml(opt.html) : '';
  }

  setValue(
    obj: DropdownOptionComponent[] | DropdownOptionComponent | null
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
  }

  registerOption(comp: DropdownOptionComponent) {
    this.options.push(comp);
  }

  unregisterOption(comp: DropdownOptionComponent) {
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

  public handleArrowUp(ev: Event | null) {
    if (this.isOpen) {
      this.focusPreviousItem(ev);
    } else if (this.allowMultiple === false) {
      this.selectPreviousItem(ev);
    }
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

  public handleArrowDown(ev: Event | null) {
    if (this.isOpen) {
      this.focusNextItem(ev);
    } else if (this.allowMultiple === false) {
      this.selectNextItem(ev);
    }
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

  public toggleItemSelected(ev: Event | null, item: DropdownOptionComponent) {
    const isSelected = this.allowMultiple
      ? this.selectedItems.indexOf(item) !== -1
      : this.selectedItem === item;

    if (isSelected) {
      this.unselectItem(ev, item);
    } else {
      this.selectItem(ev, item);
    }
    this.emitNgModelChanged();
  }

  public selectItem(ev: Event | null, item: DropdownOptionComponent) {
    if (this.allowMultiple) {
      const index = this.selectedItems.indexOf(item);
      if (index === -1) this.selectedItems.push(item);
    } else {
      this.selectedItem = item;
      this.closeDropdown(ev);
    }
    this.emitNgModelChanged();
  }

  public unselectItem(ev: Event | null, item: DropdownOptionComponent) {
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
