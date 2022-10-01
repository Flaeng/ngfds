import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DetailsComponent } from './details.component';

@NgModule({
  declarations: [
    DetailsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DetailsComponent,
  ]
})
export class FdsDetailsModule { }
