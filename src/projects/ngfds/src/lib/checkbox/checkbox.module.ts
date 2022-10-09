import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox.component';
import { FormsModule } from '@angular/forms';
import { CheckboxContentComponent } from './checkbox-content/checkbox-content.component';

@NgModule({
  declarations: [CheckboxComponent, CheckboxContentComponent],
  imports: [CommonModule, FormsModule],
  exports: [CheckboxComponent, CheckboxContentComponent],
})
export class FdsCheckboxModule {}
