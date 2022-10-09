import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { DropdownOptionComponent } from './dropdown-option/dropdown-option.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DropdownComponent, DropdownOptionComponent],
  imports: [CommonModule, FormsModule],
  exports: [DropdownComponent, DropdownOptionComponent],
})
export class FdsDropdownModule {}
