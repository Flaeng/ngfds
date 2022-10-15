import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FileUploadComponent],
  imports: [CommonModule, FormsModule],
  exports: [FileUploadComponent],
})
export class FdsFileUploadModule {}
