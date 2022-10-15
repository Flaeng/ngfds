import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.g.html',
})
export class FormPageComponent {
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
