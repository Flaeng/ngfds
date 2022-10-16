import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaComponent } from './textarea.component';

describe('TextareaComponent', () => {
  let component: TextareaComponent;
  let fixture: ComponentFixture<TextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextareaComponent);
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
      component.writeValue('true');

      // Assert
      expect(component.value).toBe('true');
    });

    it('can have its value set by the user', () => {
      // Arrange

      // Act
      component.value = 'true';

      // Assert
      expect(component.value).toBe('true');
    });

    it('will emit changes', () => {
      // Arrange
      let onChangeWasCalled = false;
      component.registerOnChange(() => onChangeWasCalled = true);

      // Act
      component.value = 'true';

      // Assert
      expect(onChangeWasCalled).toBeTrue();
    });

    it('will emit touched', () => {
      // Arrange
      let onTouchedWasCalled = false;
      component.registerOnTouched(() => onTouchedWasCalled = true);

      // Act
      component.value = 'true';

      // Assert
      expect(onTouchedWasCalled).toBeTrue();
    });
  });

});
