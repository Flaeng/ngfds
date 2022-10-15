import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DropdownComponent } from './dropdown.component';
import { DropdownOptionComponent } from './public-api';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

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
      declarations: [DropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownComponent);
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
      spyOn(component.formControl!.nativeElement, 'contains').and.returnValue(false);

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
    let fakeOptions: DropdownOptionComponent[];

    beforeEach(async () => {
      fakeOptions = [
        new FakeDropdownOptionComponent(),
        new FakeDropdownOptionComponent(),
        new FakeDropdownOptionComponent(),
        new FakeDropdownOptionComponent(),
      ] as unknown[] as DropdownOptionComponent[];

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
    let fakeOptions: DropdownOptionComponent[];

    beforeEach(async () => {
      fakeOptions = [
        new FakeDropdownOptionComponent(),
        new FakeDropdownOptionComponent(),
        new FakeDropdownOptionComponent(),
        new FakeDropdownOptionComponent(),
      ] as unknown[] as DropdownOptionComponent[];

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
    let fakeOptions: DropdownOptionComponent[];

    beforeEach(async () => {
      fakeOptions = [
        new FakeDropdownOptionComponent(),
        new FakeDropdownOptionComponent(),
        new FakeDropdownOptionComponent(),
        new FakeDropdownOptionComponent(),
      ] as unknown[] as DropdownOptionComponent[];

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
