import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DatePickerComponent],
  imports: [CommonModule, FormsModule],
  exports: [DatePickerComponent],
})
export class FdsDatePickerModule {}
