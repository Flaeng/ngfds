import { Component, Input, Optional } from '@angular/core';
import { FormFieldComponent } from '../form-field/form-field.component';
import { AngularHelper } from '../helpers/angular-helper';
import { NgModelComponent } from '../ng-model-component';

@Component({
  selector: 'fds-file-upload',
  templateUrl: './file-upload.component.html',
  providers: [...AngularHelper.formInput(FileUploadComponent)],
})
export class FileUploadComponent extends NgModelComponent<File | null> {
  @Input()
  public disabled: boolean = false;

  @Input()
  public name: string = '';

  _value: File | null = null;
  @Input()
  public get value(): File | null {
    return this._value;
  }
  public set value(value: File | null) {
    this._value = value;
    super.emitChanges(value);
  }

  constructor(@Optional() formField: FormFieldComponent) {
    super(formField);
  }

  setValue(obj: File | null): void {
    this.value = obj;
  }
}
