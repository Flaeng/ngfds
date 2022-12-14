import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSwitchComponent } from './toggle-switch.component';

describe('ToggleSwitchComponent', () => {
  let component: ToggleSwitchComponent;
  let fixture: ComponentFixture<ToggleSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('works as a form control', () => {
    it('can have its value set by angular', () => {
      // Arrange

      // Act
      component.writeValue(true);

      // Assert
      expect(component.value).toBeTrue();
    });

    it('can have its value set by the user', () => {
      // Arrange

      // Act
      component.value = true;

      // Assert
      expect(component.value).toBeTrue();
    });

    it('will emit changes', () => {
      // Arrange
      let onChangeWasCalled = false;
      component.registerOnChange(() => onChangeWasCalled = true);

      // Act
      component.value = true;

      // Assert
      expect(onChangeWasCalled).toBeTrue();
    });

    it('will emit touched', () => {
      // Arrange
      let onTouchedWasCalled = false;
      component.registerOnTouched(() => onTouchedWasCalled = true);

      // Act
      component.value = true;

      // Assert
      expect(onTouchedWasCalled).toBeTrue();
    });
  });

});
