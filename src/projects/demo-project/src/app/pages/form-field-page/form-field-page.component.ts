import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-field-page',
  templateUrl: './form-field-page.component.g.html',
  styleUrls: ['./form-field-page.component.scss'],
})
export class FormFieldPageComponent {
  requiredFormControl: FormControl;
  multiValidatorFormControl: FormControl;
  emailFormControl: FormControl;

  constructor(protected fb: FormBuilder) {
    this.requiredFormControl = this.fb.control<string>('', [
      Validators.required,
    ]);
    this.multiValidatorFormControl = this.fb.control<string>('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(15),
    ]);
    this.emailFormControl = this.fb.control<string>('', [
      Validators.minLength(5),
      Validators.maxLength(8),
      Validators.email,
    ]);
  }
}
