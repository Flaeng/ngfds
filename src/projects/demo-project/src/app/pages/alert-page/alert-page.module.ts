import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FdsAlertModule,
  FdsCardModule,
} from 'projects/ngfds/src/public-api';
import { AppComponentsModule } from '../../components/components.module';
import { AlertPageComponent } from './alert-page.component';

const routes: Routes = [{ path: '', component: AlertPageComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertRoutingModule {}

@NgModule({
  declarations: [AlertPageComponent],
  imports: [
    AlertRoutingModule,
    CommonModule,
    AppComponentsModule,
    FdsAlertModule,
    FdsCardModule,
  ],
})
export class AlertPageModule {}
