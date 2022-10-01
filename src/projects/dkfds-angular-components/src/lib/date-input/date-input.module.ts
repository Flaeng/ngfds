import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateInputComponent } from './date-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DateInputComponent],
  imports: [CommonModule, FormsModule],
  exports: [DateInputComponent],
})
export class FdsDateInputModule {}
