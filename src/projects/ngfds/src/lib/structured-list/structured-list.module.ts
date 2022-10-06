import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuredListComponent } from './structured-list.component';
import { StructuredListItemComponent } from './structured-list-item/structured-list-item.component';

@NgModule({
  declarations: [
    StructuredListComponent,
    StructuredListItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StructuredListComponent,
    StructuredListItemComponent
  ]
})
export class FdsStructuredListModule { }
