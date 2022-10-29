import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgfdsDropdownComponent } from './dropdown.component';
import { NgfdsDropdownOptionComponent } from './dropdown-option/dropdown-option.component';

@NgModule({
  declarations: [NgfdsDropdownComponent, NgfdsDropdownOptionComponent],
  imports: [CommonModule],
  exports: [NgfdsDropdownComponent, NgfdsDropdownOptionComponent],
})
export class NgfdsDropdownModule {}
