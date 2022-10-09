import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextareaComponent } from './textarea.component';

@NgModule({
  declarations: [TextareaComponent],
  imports: [CommonModule, FormsModule],
  exports: [TextareaComponent],
})
export class FdsTextareaModule {}
