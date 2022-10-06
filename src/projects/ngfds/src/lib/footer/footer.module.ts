import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterColumnComponent } from './footer-column/footer-column.component';
import { FooterInlineComponent } from './footer-inline/footer-inline.component';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    FooterComponent,
    FooterColumnComponent,
    FooterInlineComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    FooterColumnComponent,
    FooterInlineComponent
  ]
})
export class FdsFooterModule { }
