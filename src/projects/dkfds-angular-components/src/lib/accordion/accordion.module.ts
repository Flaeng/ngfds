import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionHeaderComponent } from './accordion-header/accordion-header.component';
import { AccordionContentComponent } from './accordion-content/accordion-content.component';
import { AccordionComponent } from './accordion.component';

@NgModule({
  declarations: [
    AccordionComponent,
    AccordionHeaderComponent,
    AccordionContentComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccordionComponent,
    AccordionHeaderComponent,
    AccordionContentComponent,
  ]
})
export class FdsAccordionModule { }
