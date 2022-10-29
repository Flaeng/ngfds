import { Component, forwardRef, Input, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormFieldComponent } from '../form-field/form-field.component';
import { NgModelComponent } from '../ng-model-component';

export type CheckboxSize = 'large' | 'small';
@Component({
  selector: 'fds-checkbox',
  templateUrl: './checkbox.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CheckboxComponent),
    },
  ],
})
export class CheckboxComponent extends NgModelComponent<boolean> {
  _value: boolean = false;
  public get value(): boolean {
    return this._value;
  }
  public set value(value: boolean) {
    this._value = value;
    super.emitChanges(value);
  }

  @Input()
  public disabled: boolean = false;

  @Input()
  public size: CheckboxSize = 'large';

  @Input()
  public content: string | null = null;

  @Input()
  public name: string = '';

  static idGenerator = 1;

  id: string = 'checkbox' + (CheckboxComponent.idGenerator++).toString();

  constructor(@Optional() formField: FormFieldComponent) {
    super(formField);
  }

  setValue(obj: boolean): void {
    this.value = obj;
  }
}
