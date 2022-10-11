import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FdsAccordionModule,
  FdsCardModule,
} from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { AccordionPageComponent } from './accordion-page.component';

const routes: Routes = [{ path: '', component: AccordionPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccordionRoutingModule {}

@NgModule({
  declarations: [AccordionPageComponent],
  imports: [
    AccordionRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsAccordionModule,
    FdsCardModule,
  ],
})
export class AccordionPageModule {}
