import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFieldComponent } from './search-field.component';
import { FdsIconsModule } from '../icon/icons.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchFieldComponent],
  imports: [CommonModule, FormsModule, FdsIconsModule],
  exports: [SearchFieldComponent],
})
export class FdsSearchFieldModule {}
