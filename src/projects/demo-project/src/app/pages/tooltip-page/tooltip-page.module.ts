import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FdsCardModule, FdsTooltipModule } from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { TooltipPageComponent } from './tooltip-page.component';

const routes: Routes = [{ path: '', component: TooltipPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TooltipRoutingModule {}

@NgModule({
  declarations: [TooltipPageComponent],
  imports: [
    TooltipRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsTooltipModule,
    FdsCardModule,
  ],
})
export class TooltipPageModule {}
