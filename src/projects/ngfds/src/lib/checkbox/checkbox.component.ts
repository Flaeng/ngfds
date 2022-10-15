import { Component, Input } from '@angular/core';
import { AngularHelper } from '../helpers/angular-helper';
import { NgModelComponent } from '../ng-model-component';

export type CheckboxSize = 'large' | 'small';
@Component({
  selector: 'fds-checkbox',
  templateUrl: './checkbox.component.html',
  providers: [...AngularHelper.formInput(CheckboxComponent)],
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

  static idGenerator = 1;

  id: string = 'checkbox' + (CheckboxComponent.idGenerator++).toString();

  setValue(obj: boolean): void {
    this.value = obj;
  }
}
