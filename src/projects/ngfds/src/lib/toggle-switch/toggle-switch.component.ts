import { Component, Input } from '@angular/core';
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

  private _value: boolean = false;
  public get value(): boolean {
    return this._value;
  }
  public set value(value: boolean) {
    this._value = value;
    this.onChange?.call(this, value);
    this.onTouched?.call(this);
  }

  static idGenerator = 1;

  id: string =
    'toggle-switch' + (ToggleSwitchComponent.idGenerator++).toString();

  setValue(obj: boolean): void {
    this.value = obj;
  }
}
