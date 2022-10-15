import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonComponent } from './radio-button.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { RadioContentComponent } from './radio-content/radio-content.component';

@NgModule({
  declarations: [
    RadioButtonComponent,
    RadioGroupComponent,
    RadioContentComponent,
  ],
  imports: [CommonModule],
  exports: [RadioButtonComponent, RadioGroupComponent, RadioContentComponent],
})
export class FdsRadioButtonModule {}
