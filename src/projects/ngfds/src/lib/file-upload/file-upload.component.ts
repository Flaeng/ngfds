import { Component, forwardRef, Input, Optional } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormFieldComponent } from '../form-field/form-field.component';
import { InputSize } from '../models/input-sizes';
import { NgModelComponent } from '../ng-model-component';

@Component({
  selector: 'fds-file-upload',
  templateUrl: './file-upload.component.html',
  providers: [
    { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => FileUploadComponent) },
  ]
})
export class FileUploadComponent extends NgModelComponent<File | null> {
  @Input()
  public disabled: boolean = false;

  @Input()
  public name: string = '';

  @Input()
  public size: InputSize | null = null;

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
