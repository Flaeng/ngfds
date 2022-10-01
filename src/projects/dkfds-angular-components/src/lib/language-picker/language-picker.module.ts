import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FdsTooltipModule } from '../tooltip/tooltip.module';
import { LanguagePickerComponent } from './language-picker.component';

@NgModule({
  declarations: [
    LanguagePickerComponent
  ],
  imports: [
    CommonModule,
    FdsTooltipModule
  ],
  exports: [
    LanguagePickerComponent
  ]
})
export class FdsLanguagePickerModule { }
