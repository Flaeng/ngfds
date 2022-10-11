import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FdsCardModule,
  FdsStepIndicatorModule,
} from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { StepIndicatorPageComponent } from './step-indicator-page.component';

const routes: Routes = [{ path: '', component: StepIndicatorPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepIndicatorRoutingModule {}

@NgModule({
  declarations: [StepIndicatorPageComponent],
  imports: [
    StepIndicatorRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsStepIndicatorModule,
    FdsCardModule,
  ],
})
export class StepIndicatorPageModule {}
