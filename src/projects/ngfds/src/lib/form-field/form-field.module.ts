import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field.component';
import { FormErrorMessageComponent } from './form-error-message/form-error-message.component';
import { FormComponent } from '../form/form.component';
import { FormErrorSummaryComponent } from '../form/form-error-summary/form-error-summary.component';

@NgModule({
  declarations: [
    FormComponent,
    FormErrorSummaryComponent,
    FormFieldComponent,
    FormErrorMessageComponent,
  ],
  imports: [CommonModule],
  exports: [
    FormComponent,
    FormErrorSummaryComponent,
    FormFieldComponent,
    FormErrorMessageComponent,
  ],
})
export class FdsFormsModule {}
