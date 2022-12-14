import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgfdsDropdownOptionComponent } from './dropdown-option/dropdown-option.component';

import { NgfdsDropdownComponent } from './dropdown.component';

describe('NgfdsDropdownComponent', () => {
  let component: NgfdsDropdownComponent;
  let fixture: ComponentFixture<NgfdsDropdownComponent>;

  class FakeDropdownOptionComponent {
    _hasFocus: boolean = false;

    public setFocus() {
      this._hasFocus = true;
    }
    public hasFocus(): boolean {
      return this._hasFocus;
    }
  }

  const fakeEvent = {
    preventDefault(): void {
      return;
    },
    stopPropagation(): void {
      return;
    },
  } as Event;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgfdsDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgfdsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('can open and close dropdown', () => {
    it('can open dropdown', () => {
      // Arrange

      // Act
      component.openDropdown(fakeEvent);
      fixture.detectChanges();

      // Assert
      expect(component.isOpen).toBeTrue();
      expect(
        fixture.debugElement.query(By.css('.dropdown-list.open'))
      ).toBeTruthy();
    });

    it('can toggle dropdown open', () => {
      // Arrange

      // Act
      component.toggleDropdown(fakeEvent);
      fixture.detectChanges();

      // Assert
      expect(component.isOpen).toBeTrue();
      expect(
        fixture.debugElement.query(By.css('.dropdown-list.open'))
      ).toBeTruthy();
    });

    it('can close dropdown', () => {
      // Arrange
      component.isOpen = true;

      // Act
      component.closeDropdown(fakeEvent);
      fixture.detectChanges();

      // Assert
      expect(component.isOpen).toBeFalse();
      expect(
        fixture.debugElement.query(By.css('.dropdown-list.open'))
      ).toBeNull();
    });

    it('can toggle dropdown close', () => {
      // Arrange
      component.isOpen = true;

      // Act
      component.toggleDropdown(fakeEvent);
      fixture.detectChanges();

      // Assert
      expect(component.isOpen).toBeFalse();
      expect(
        fixture.debugElement.query(By.css('.dropdown-list.open'))
      ).toBeNull();
    });

    it('will close dropdown when clicked outside of component', () => {
      // Arrange
      component.isOpen = true;
      if (!component.formControl) {
        fail('formControl is not defined');
        return;
      }
      spyOn(component.formControl.nativeElement, 'contains').and.returnValue(false);

      // Act
      component.globalClickHandler({ ...fakeEvent } as MouseEvent, {} as HTMLElement);

      // Assert
      expect(component.isOpen).toBeFalse();
      expect(
        fixture.debugElement.query(By.css('.dropdown-list.open'))
      ).toBeNull();
    });
  });

  describe('can focus dropdown items', () => {
    let fakeOptions: NgfdsDropdownOptionComponent[];

    beforeEach(async () => {
      fakeOptions = [
        new FakeDropdownOptionComponent(),
        new FakeDropdownOptionComponent(),
        new FakeDropdownOptionComponent(),
        new FakeDropdownOptionComponent(),
      ] as unknown[] as NgfdsDropdownOptionComponent[];

      fakeOptions.forEach((x) => component.registerOption(x));
      fixture.detectChanges();
    });

    it('will focus first item if no item is selected or focused', () => {
      // Arrange

      // Act
      component.openDropdown(fakeEvent);

      // Assert
      expect(fakeOptions[0].hasFocus()).toBeTrue();
      expect(fakeOptions[1].hasFocus()).toBeFalse();
      expect(fakeOptions[2].hasFocus()).toBeFalse();
      expect(fakeOptions[3].hasFocus()).toBeFalse();
    });

    it('will focus item at index 1 when index 0 is focused and arrow-down is pressed', () => {
      // Arrange
      fakeOptions[0].setFocus();
      spyOn(fakeOptions[1], 'setFocus').and.callThrough();

      // Act
      component.focusNextItem(fakeEvent);

      // Assert
      expect(fakeOptions[1].setFocus).toHaveBeenCalled();
    });

    it('will focus first item when last item is focused and arrow-down is pressed', () => {
      // Arrange
      fakeOptions[3].setFocus();
      spyOn(fakeOptions[0], 'setFocus').and.callThrough();

      // Act
      component.focusNextItem(fakeEvent);

      // Assert
      expect(fakeOptions[0].setFocus).toHaveBeenCalled();
    });

    it('will focus last item when first item is focused and arrow-up is pressed', () => {
      // Arrange
      fakeOptions[0].setFocus();
      spyOn(fakeOptions[3], 'setFocus').and.callThrough();

      // Act
      component.focusPreviousItem(fakeEvent);

      // Assert
      expect(fakeOptions[3].setFocus).toHaveBeenCalled();
    });

    it('will focus item at index 2 when index 3 is focused and arrow-up is pressed', () => {
      // Arrange
      fakeOptions[3].setFocus();
      spyOn(fakeOptions[2], 'setFocus').and.callThrough();

      // Act
      component.focusPreviousItem(fakeEvent);

      // Assert
      expect(fakeOptions[2].setFocus).toHaveBeenCalled();
    });
  });

  describe('when in single-select-mode', () => {
    let fakeOptions: NgfdsDropdownOptionComponent[];

    beforeEach(async () => {
      fakeOptions = [
        new FakeDropdownOptionComponent(),
        new FakeDropdownOptionComponent(),
        new FakeDropdownOptionComponent(),
        new FakeDropdownOptionComponent(),
      ] as unknown[] as NgfdsDropdownOptionComponent[];

      fakeOptions.forEach((x) => component.registerOption(x));
      fixture.detectChanges();
    });
    it('can select item', () => {
      // Arrange

      // Act
      component.selectItem(fakeEvent, fakeOptions[2]);

      // Assert
      expect(component.selectedItem).toBe(fakeOptions[2]);
    });
    it('selects first option on the list when clicking arrow down while dropdown is closed and no item is selected', () => {
      // Arrange

      // Act
      component.handleArrowDown(fakeEvent);

      // Assert
      expect(component.isOpen).toBeFalse();
      expect(component.selectedItem).toEqual(fakeOptions[0]);
    });
    it('selects next option on the list when clicking arrow down while dropdown is closed', () => {
      // Arrange
      component.selectedItem = fakeOptions[1];

      // Act
      component.handleArrowDown(fakeEvent);

      // Assert
      expect(component.isOpen).toBeFalse();
      expect(component.selectedItem).toEqual(fakeOptions[2]);
    });
    it('stays on last option on the list when clicking arrow down while dropdown is closed and last item is selected', () => {
      // Arrange
      component.selectedItem = fakeOptions[3];

      // Act
      component.handleArrowDown(fakeEvent);

      // Assert
      expect(component.isOpen).toBeFalse();
      expect(component.selectedItem).toEqual(fakeOptions[3]);
    });
    it('does nothing when clicking arrow up while dropdown is closed and no item is selected', () => {
      // Arrange

      // Act
      component.handleArrowUp(fakeEvent);

      // Assert
      expect(component.isOpen).toBeFalse();
      expect(component.selectedItem).toBeNull();
    });
    it('stays on first option on the list when clicking arrow up while dropdown is closed and first item is selected', () => {
      // Arrange
      component.selectedItem = fakeOptions[0];

      // Act
      component.handleArrowUp(fakeEvent);

      // Assert
      expect(component.isOpen).toBeFalse();
      expect(component.selectedItem).toEqual(fakeOptions[0]);
    });
    it('can select another item when one has already been selected', () => {
      // Arrange
      component.selectedItem = fakeOptions[1];

      // Act
      component.selectItem(fakeEvent, fakeOptions[2]);

      // Assert
      expect(component.selectedItem).toBe(fakeOptions[2]);
    });
  });

  describe('when in multi-select-mode', () => {
    let fakeOptions: NgfdsDropdownOptionComponent[];

    beforeEach(async () => {
      fakeOptions = [
        new FakeDropdownOptionComponent(),
        new FakeDropdownOptionComponent(),
        new FakeDropdownOptionComponent(),
        new FakeDropdownOptionComponent(),
      ] as unknown[] as NgfdsDropdownOptionComponent[];

      fakeOptions.forEach((x) => component.registerOption(x));
      component.allowMultiple = true;
      fixture.detectChanges();
    });
    it('can select item', () => {
      // Arrange

      // Act
      component.selectItem(fakeEvent, fakeOptions[2]);

      // Assert
      expect(component.selectedItems).toEqual([fakeOptions[2]]);
    });
    it('can select multiple items', () => {
      // Arrange
      component.selectedItems = [fakeOptions[1]];

      // Act
      component.selectItem(fakeEvent, fakeOptions[2]);

      // Assert
      expect(component.selectedItems).toEqual([fakeOptions[1], fakeOptions[2]]);
    });
    it('can deselect items', () => {
      // Arrange
      component.selectedItems = [fakeOptions[1], fakeOptions[2]];

      // Act
      component.unselectItem(fakeEvent, fakeOptions[2]);

      // Assert
      expect(component.selectedItems).toEqual([fakeOptions[1]]);
    });
    it('can select item with toggleItemSelected', () => {
      // Arrange

      // Act
      component.toggleItemSelected(fakeEvent, fakeOptions[2]);

      // Assert
      expect(component.selectedItems).toEqual([fakeOptions[2]]);
    });
    it('can select multiple items with toggleItemSelected', () => {
      // Arrange
      component.selectedItems = [fakeOptions[1]];

      // Act
      component.toggleItemSelected(fakeEvent, fakeOptions[2]);

      // Assert
      expect(component.selectedItems).toEqual([fakeOptions[1], fakeOptions[2]]);
    });
    it('can deselect items with toggleItemSelected', () => {
      // Arrange
      component.selectedItems = [fakeOptions[1], fakeOptions[2]];

      // Act
      component.toggleItemSelected(fakeEvent, fakeOptions[2]);

      // Assert
      expect(component.selectedItems).toEqual([fakeOptions[1]]);
    });
  });
});
