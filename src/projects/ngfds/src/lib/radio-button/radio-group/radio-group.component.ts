import { Component, ElementRef, forwardRef, Input, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { FormFieldComponent } from '../../form-field/form-field.component';
import { NgModelComponent } from '../../ng-model-component';

export type RadioButtonSize = 'large' | 'small';

@Component({
  selector: 'fds-radio-group',
  templateUrl: './radio-group.component.html',
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => RadioGroupComponent) },
  ]
})
export class RadioGroupComponent extends NgModelComponent<unknown | null> {
  @Input()
  public disabled: boolean = false;

  @Input()
  public name: string = '';

  _value: unknown | null = null;
  public get value(): unknown | null {
    return this._value;
  }
  public set value(value: unknown | null) {
    this._value = value;
    super.emitChanges(value);
  }

  private _radioButtonSize: RadioButtonSize = 'large';
  @Input('radio-button-size')
  public get radioButtonSize(): RadioButtonSize {
    return this._radioButtonSize;
  }
  public set radioButtonSize(value: RadioButtonSize) {
    this._radioButtonSize = value;
    this.$radioButtonSize.next(value);
  }
  $radioButtonSize: BehaviorSubject<RadioButtonSize> =
    new BehaviorSubject<RadioButtonSize>('large');

  static idGenerator = 1;

  groupName: string =
    'radiogroup' + (RadioGroupComponent.idGenerator++).toString();

  constructor(public el: ElementRef, @Optional() formField: FormFieldComponent) {
    super(formField);
  }

  setValue(obj: unknown | null): void {
    this.value = obj;
  }
}
