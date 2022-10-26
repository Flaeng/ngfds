import { Component, Input, Optional } from '@angular/core';
import { FormFieldComponent } from '../form-field/form-field.component';
import { AngularHelper } from '../helpers/angular-helper';
import { NgModelComponent } from '../ng-model-component';

@Component({
  selector: 'fds-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  providers: [...AngularHelper.formInput(ToggleSwitchComponent)],
})
export class ToggleSwitchComponent extends NgModelComponent<boolean> {
  @Input()
  public disabled: boolean = false;

  @Input()
  public name: string = '';

  private _value: boolean = false;
  public get value(): boolean {
    return this._value;
  }
  public set value(value: boolean) {
    this._value = value;
    super.emitChanges(value);
  }

  static idGenerator = 1;

  id: string =
    'toggle-switch' + (ToggleSwitchComponent.idGenerator++).toString();

  constructor(@Optional() formField: FormFieldComponent) {
    super(formField);
  }

  setValue(obj: boolean): void {
    this.value = obj;
  }
}
